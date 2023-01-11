import { PersonIF } from "./Person.type";
import { InvocationHandler } from "./InvocationHandler";

export const wrapOwnerProxy = (person: PersonIF) => {
	const handler: ProxyHandler<PersonIF> = {
		apply(target, thisArg, argArrs) {
			console.log({ target, thisArg, argArrs });
		},
		get(target, p, receiver) {
			console.log({ target, p, receiver });
		},

		set(target, p, newValue, receiver) {
			console.log({ target, p, newValue, receiver });
			return false;
		},
	};

	return new Proxy(person, handler);
};
