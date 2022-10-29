// const Singleton = <
// 	T extends {
// 		new (...args: any[]): {};
// 		[SINGLETON_KEY]?: InstanceType<T>;
// 		getInstance?: () => InstanceType<T>;
// 	}
// >(
// 	fn: T
// ) => {
// 	Object.defineProperty(fn, INSTANCE, {
// 		value: new fn(),
// 	});

// 	Object.defineProperty(fn, "getInstance", {
// 		value: () => {
// 			return fn[SINGLETON_KEY];
// 		},
// 	});

// 	// constructor readonly로 변경 <- 좋은 생각이 아닌 것 같음
// 	Object.defineProperty(fn, "constructor", {
// 		set: undefined,
// 	});

// 	return fn;
// };

const SINGLETON_KEY = Symbol("singleton-decorator:instance");

// https://trevoratlas.com/posts/how-to-create-a-typescript-singleton-decorator
export type Singleton<T extends new (...args: any[]) => any> = T & {
	[SINGLETON_KEY]: T extends new (...args: any[]) => infer I ? I : never;
};

export const Singleton = <T extends new (...args: any[]) => any>(type: T) =>
	new Proxy(type, {
		// this will hijack the constructor
		construct(target: Singleton<T>, argsList, newTarget) {
			// we should skip the proxy for children of our target class
			if (target.prototype !== newTarget.prototype) {
				return Reflect.construct(target, argsList, newTarget);
			}
			// if our target class does not have an instance, create it
			if (!target[SINGLETON_KEY]) {
				target[SINGLETON_KEY] = Reflect.construct(target, argsList, newTarget);
			}
			// return the instance we created!
			return target[SINGLETON_KEY];
		},
	});

export default Singleton;
