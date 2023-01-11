import { PersonIF } from "./Person.type";


export interface InvocationHandler {
	invoke(
		person: PersonIF,
		method: PersonIF[keyof PersonIF],
		args: Array<any>
	): void;
}
