use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, AccountId, PanicOnDefault, env};
use near_sdk::serde::{Serialize, Deserialize};

#[near_bindgen]
#[derive(Serialize, Deserialize, PanicOnDefault)]
pub struct Payload {
   pub id:String,
   pub name:String,
   pub image:String,
   pub price:String,
}

#[near_bindgen]
#[derive(BorshSerialize,  BorshDeserialize, Serialize, PanicOnDefault)]
pub struct  Resume {
   pub id:String,
   pub name:String,
   pub image:String,
   pub price:String,
   pub bought:u32,
   pub owner: AccountId
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