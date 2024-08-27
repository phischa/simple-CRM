export class User {
        firstName: string;
        lastName: string;
        email: string;
        birthDate: number;
        address: string;
        postalCode: number;
        city: string;
        id: any;

        constructor(obj?: any) {
                this.firstName = obj ? obj.firstName : '';
                this.lastName = obj ? obj.lastName : '';
                this.email = obj ? obj.email : '';
                this.birthDate = obj ? obj.birthDate : '';
                this.address = obj ? obj.address : '';
                this.postalCode = obj ? obj.postalCode : '';
                this.city = obj ? obj.city : '';
                this.id = obj ? obj.id : '';
        }

        public toJSON() {
                return {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        birthDate: this.birthDate,
                        address: this.address,
                        postalCode: this.postalCode,
                        city: this.city,
                        id: this.id,
                };
        }

}