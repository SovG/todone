import { beforeEach, describe, expect, it } from "vitest"
import "fake-indexeddb/auto";
import { DB } from "./db";
import Dexie from "dexie";



describe('db', () => {

    beforeEach(async () => {
        await Dexie.delete('TodoDB');
    })

    it('should initialise IndexDB connection without error on construction', () => {
        const sit = new DB();

        expect(sit).not.toBeNull();
    })

    it('should persist data into database and be able to retreive it', async () => {
        const sit = new DB();

        const todoOne = await sit.addTodo("Bob");
        const todoTwo = await sit.addTodo("Jane");

        const res = await sit.getAllTodos();

        expect(res).to.toHaveLength(2);
        expect(res?.find(x => x.id == todoOne?.id)).toBeTruthy();
        expect(res?.find(x => x.id == todoTwo?.id)).toBeTruthy();
    });

    it('should persist be able to remove records from the database', async () => {
        const sit = new DB();

        const todoOne = await sit.addTodo("Bob");
        const todoTwo = await sit.addTodo("Jane");

        await sit.deleteTodo(todoOne?.id);

        const res = await sit.getAllTodos();

        expect(res).to.toHaveLength(1);
        expect(res?.find(x => x.id == todoTwo?.id)).toBeTruthy();
    });
})