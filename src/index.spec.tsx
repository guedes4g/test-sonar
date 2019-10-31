import { testCoverExample } from "./App";

describe("test example", ()=> {
    it("should return constant", ()=> {
        const response = testCoverExample();
        expect(response).toEqual("constant");
    })
})