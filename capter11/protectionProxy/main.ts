
import { Person } from "./Person";
import { PersonIF } from "./Person.type";

export const wrapOwnerProxy = (person: PersonIF) => {
	const handler: ProxyHandler<PersonIF> = {
		set(target, p, newValue, receiver) {

			const isAccessible = (p: any): p is keyof PersonIF => {
				const accessiableKeys: Array<keyof PersonIF> = ['gender', 'interests', 'name'];
				const isAccessible = accessiableKeys.includes(p);
				return isAccessible;
			}

			if (isAccessible(p)) {
				// todo 타입 에러 어떻게 해결해야할지 모르겠음..
				// @ts-ignore-start
				target[p] = newValue;
				// @ts-ignore-end
				return true;
			} else {
				return false;
			}
		},
	};

	return new Proxy(person, handler);
};


export const wrapOthersProxy = (person: PersonIF) => {
	const handler: ProxyHandler<PersonIF> = {
		set(target, p, newValue, receiver) {

			const isAccessible = (p: any): p is keyof PersonIF => {
				const accessiableKeys: Array<keyof PersonIF> = ['geekRating'];
				const isAccessible = accessiableKeys.includes(p);
				return isAccessible;
			}

			if (isAccessible(p)) {
				// todo 타입 에러 어떻게 해결해야할지 모르겠음..
				// @ts-ignore-start
				target[p] = newValue;
				// @ts-ignore-end
				return true;
			} else {
				return false;
			}
		},
	};

	return new Proxy(person, handler);
};


const drive = () => {
	// 방금 만든 따끈 따끈한 계정
	const me = wrapOwnerProxy(new Person());
	try {
		console.log('------------');
		console.log(`나의 이름은? ${me.name}`);
		me.name = '정은';
		console.log(`바뀐 나의 이름은? ${me.name}`);
		console.log(`내 점수 ${me.geekRating} 바꾸기 시도 전`);
		me.geekRating = 5;
	} catch (error) {
		console.log(error);
	}
	console.log(`내 점수 ${me.geekRating} 바꾸기 시도 후`);


	const you = wrapOthersProxy(new Person());
	try {
		console.log('------------');
		console.log(`당신의 이름은? ${you.name}`);
		you.name = '이성';
	} catch (error) {
		console.log(error)
	}
	console.log(`바뀐 당신의 이름은? ${you.name}`);
	console.log(`당신의 점수 ${you.geekRating} 바꾸기 시도 전`);
	you.geekRating = 5;
	console.log(`당신의 점수 ${you.geekRating} 바꾸기 시도 후`);
};

drive();
