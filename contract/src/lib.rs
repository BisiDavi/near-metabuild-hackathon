use near_sdk::collections::UnorderedMap;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen,PanicOnDefault, env, Promise};

pub use crate::model::*;

mod model;


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct  Marketplace {
    listed_resumes: UnorderedMap<String, model::Resume>
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
        let resume = model::Resume::from_payload(payload);
        self.listed_resumes.insert(&resume.id, &resume);
    }

    pub fn get_resume(&self, id: &String) -> Option<model::Resume>{
        self.listed_resumes.get(id)
    }

    pub fn get_resumes(&self) -> Vec<model::Resume>{
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
