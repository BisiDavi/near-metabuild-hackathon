use near_sdk::collections::UnorderedMap;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, AccountId, PanicOnDefault, env, Promise};
use near_sdk::serde::{Serialize, Deserialize};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct  Marketplace {
    listed_resumes: UnorderedMap<String, Resume>
}

#[near_bindgen]
impl Marketplace{

    #[init]
    pub fn init() -> Self {
        Self {
            listed_resumes: UnorderedMap::new(b"listed_cv".to_vec())
        }
    }

    pub fn set_resume(&mut self, payload:Payload){
        let resume = Resume::from_payload(payload);
        self.listed_resumes.insert(&resume.id, &resume);
    }

    pub fn get_resume(&self, id: &String) -> Option<Resume>{
        self.listed_resumes.get(id)
    }

    pub fn get_resumes(&self) -> Vec<Resume>{
        return self.listed_resumes.values_as_vector().to_vec();
    }
    
    #[payable]
    pub fn buy_resume(&mut self, resume_id: &String){
        match self.listed_resumes.get(resume_id){
            Some(ref mut resume) => {
                let price = resume.price.parse().unwrap();
                assert_eq!(env::attached_deposit(), price, "attached deposit should be equal to the product's");
                let owner = &resume.owner.as_str();
                Promise::new(owner.parse().unwrap()).transfer(price);
                resume.increment_bought();
                self.listed_resumes.insert(&resume.id, &resume);
            }
            _ => {
                env::panic_str("resume not found");
            }
        }
    }

}

#[near_bindgen]
#[derive(Serialize, Deserialize, PanicOnDefault)]
pub struct Payload {
    id:String,
    name:String,
    image:String,
    price:String,
}

#[near_bindgen]
#[derive(BorshSerialize,  BorshDeserialize, Serialize, PanicOnDefault)]
pub struct  Resume {
    id:String,
    name:String,
    image:String,
    price:String,
    bought:u32,
    owner: AccountId
}

 

#[near_bindgen]
impl Resume  {
    pub fn from_payload(payload: Payload) -> Self {
        Self {
            id: payload.id,
            name: payload.name,
            image: payload.image,
            price: payload.price,
            bought: 0,
            owner: env::signer_account_id()
        }
    }

    pub fn increment_bought(&mut self) {
        self.bought = self.bought + 1;
    }
}