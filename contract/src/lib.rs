use near_sdk::collections::UnorderedMap;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, PanicOnDefault};

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

    pub fn set_resume(&mut self, payload:model::Payload){
        let resume = Resume::from_payload(payload);
        self.listed_resumes.insert(&resume.id, &resume);
    }

    pub fn get_resume(&self, id: &String) -> Option<Resume>{
        self.listed_resumes.get(id)
    }

    pub fn get_resumes(&self) -> Vec<Resume>{
        return self.listed_resumes.values_as_vector().to_vec();
    }

}