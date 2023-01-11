import { wrapOwnerProxy } from "./wrapOwnerProxy";
import { Person } from "./Person";
import { PersonIF } from "./Person.type";

const drive = () => {
	// 방금 만든 따끈 따끈한 계정
	const joe = wrapOwnerProxy(new Person());
	// const joe = new Person();

	wrapOwnerProxy(joe);
	console.log({ joe });
	console.log(joe.getGender());
	console.log(joe.setGeekRating(3));
};

drive();
