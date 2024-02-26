import { Fixture } from "./fixture";

type Message = {
  id: string;
    someOtherId: string;
    someNestedData: {
        id: string;
        someOtherId: string;
    }
};

const defautlMessage: Message = {
    id: '1',
    someOtherId: '2',
    someNestedData: {
        id: '3',
        someOtherId: '4'
    }
};

const setId =
  (id: string) =>
  (data: Message): Message => ({ ...data, id });

const setSomeOtherId =
  (someOtherId: string) =>
        (data: Message): Message => ({ ...data, someOtherId });
  
const setNestedId =
    (id: string) =>
    (data: Message): Message => ({ ...data, someNestedData: { ...data.someNestedData, id } });

const setToProcessed = setNestedId('5');
const message = Fixture.of<Message>(defautlMessage).map(setId('3'), setSomeOtherId('4'), setToProcessed).value();

console.log(message);