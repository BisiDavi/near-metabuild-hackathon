use near_sdk::collections::UnorderedMap;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, PanicOnDefault};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct  Marketplace {
    resumes: UnorderedMap<String, String>
}

#[near_bindgen]
impl Marketplace{

    #[init]
    pub fn init() -> Self {
        Self {
            resumes: UnorderedMap::new(b"cv".to_vec())
        }
    }

    pub fn set_resume(&mut self, id:String, product_name:String){
        self.resumes.insert(&id, &product_name);
    }

    pub fn get_resume(&self, id: &String) -> Option<String>{
        self.resumes.get(id)
    }

}