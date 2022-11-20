use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, PanicOnDefault};
use near_sdk::serde::{Serialize, Deserialize};

#[near_bindgen]
#[derive(BorshSerialize,  BorshDeserialize, Serialize, PanicOnDefault)]
pub struct Resume {
    id:String,
    name:String,
    image:String,
    price:String,
    bought:u32
}

#[near_bindgen]
#[derive(Serialize, Deserialize, PanicOnDefault)]
pub struct Payload {
    id:String,
    name:String,
    image:String,
    price:String,
    bought:u32
}


#[near_bindgen]
impl Resume {
    pub fn from_payload(payload: Payload) -> Self {
        Self {
            id: payload.id,
            name: payload.name,
            image: payload.image,
            price: payload.price,
            bought: 0
        }
    }

    pub fn increment_bought(&mut self) {
        self.bought = self.bought + 1;
    }
}