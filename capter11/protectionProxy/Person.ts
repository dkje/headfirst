import { Gender, PersonIF } from "./Person.type";

//todo: name, gender, interests는 나만 수정 가능, rating은 남들만 가능 
export class Person implements PersonIF {
	name: string = "";
	gender: Gender = "female";
	interests: string = "";
	rating: number = 0;
	ratingCount: number = 0;

	constructor() { }

	getName(): string {
		return this.name;
	}
	getGender(): Gender {
		return this.gender;
	}
	getInterests(): string {
		return this.interests;
	}
	getGeekRating(): number {
		if (this.ratingCount === 0) {
			return 0;
		}
		return this.rating / this.ratingCount;
	}
	setName(name: string): void {
		this.name = name;
	}
	setGender(gender: Gender): void {
		this.gender = gender;
	}
	setInterests(interests: string): void {
		this.interests = interests;
	}
	setGeekRating(rating: number): void {
		this.rating += rating;
		this.ratingCount++;
	}
}
