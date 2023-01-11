export type Gender = "male" | "female";
export interface PersonIF {
	getName(): string;
	getGender(): Gender;
	getInterests(): string;
	getGeekRating(): number;

	setName(name: string): void;
	setGender(gender: Gender): void;
	setInterests(interests: string): void;
	setGeekRating(rating: number): void;
}
