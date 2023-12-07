 export type ErrorsType = {
	errorName: boolean | null;
	errorEmail: boolean | null;
	errorPass: boolean | null;
	errorConfirmPass: boolean | null;
};
 export type UserInfoType = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};
export type inputValueTypes = {
	name?: string;
	email: string;
	password: string;
	isLoggIn?: boolean
};

