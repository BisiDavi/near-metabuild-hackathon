use near_sdk::collections::UnorderedMap;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, PanicOnDefault};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct  Marketplace {
    products: UnorderedMap<String, String>
}

#[near_bindgen]
impl Marketplace{

#[init]
pub fn init() -> Self {
    Self {
        products: UnorderedMap::new(b"product".to_vec())
    }
}

pub fn set_product(&mut self, id:String, product_name:String){
    self.products.insert(&id, &product_name);
}

}