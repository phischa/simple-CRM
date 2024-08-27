export class User {
        firstName: string;
        lastName: string;
        birthDate: number;
        address: string;
        email!: string;
        postalCode: number;
        city: string;

        constructor(obj?: any) {
                this.firstName = obj ? obj.firstName : '';
                this.lastName = obj ? obj.lastName : '';
                this.birthDate = obj ? obj.birthDate : '';
                this.address = obj ? obj.address : '';
                this.postalCode = obj ? obj.postalCode : '';
                this.city = obj ? obj.city : '';
        }

        public toJSON() {
                return {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        birthDate: this.birthDate,
                        address: this.address,
                        postalCode: this.postalCode,
                        city: this.city,
                };
        }

}