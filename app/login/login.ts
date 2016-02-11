export class LoginController {

    public credentials:any;

    static $inject = ['AuthService'];

    constructor(private AuthService) {

        this.credentials = {
            username: '',
            password: ''
        }
    }

    public login() {

        this.AuthService.login(this.credentials);
    }
}
