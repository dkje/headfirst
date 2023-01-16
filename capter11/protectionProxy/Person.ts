import { Gender, PersonIF } from "./Person.type";

//todo: name, gender, interests는 나만 수정 가능, rating은 남들만 가능 
export class Person implements PersonIF {
	_name: string = "이름을 설정해주세요";
	_gender: Gender = "female";
	_interests: string = "";
	_rating: number = 0;
	_ratingCount: number = 0;

	constructor() { }

	get name(): string {
		return this._name;
	}
	get gender(): Gender {
		return this._gender;
	}
	get interests(): string {
		return this._interests;
	}
	get geekRating(): number {
		if (this._ratingCount === 0) {
			return 0;
		}
		return this._rating / this._ratingCount;
	}
	
	set name(name: string) {
		this._name = name;
	}
	set gender(gender: Gender) {
		this._gender = gender;
	}
	set interests(interests: string) {
		this._interests = interests;
	}
	set geekRating(rating: number) {
		this._rating += rating;
		this._ratingCount++;
	}
}
