import { describe, expect, it } from "vitest";
import {greet} from "../src/js/greetings";

describe('greet', () => {
    it('should return the correct greeting for each countrys language with existing funtion "greet"',()=>{
        expect(greet).toBeDefined();
    });

    it('should print Hello on console when the case is Australia',()=>{
        const language='Australia';
        const sut = greet(language)
        expect(sut).toBe("Hello")
    })

    it('should print Xin Chào on console when the case is Vietnam',()=>{
        const language='Vietnam';
        const sut = greet(language)
        expect(sut).toBe("Xin Chào")
    })

    it('should print Saluton on console when there is no specified case',()=>{
        const language='Unknown';
        const sut = greet(language)
        expect(sut).toBe("Saluton")
    })
});