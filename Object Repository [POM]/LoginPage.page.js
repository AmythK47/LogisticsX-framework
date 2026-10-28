class LoginPage{
    constructor(page){
        this.page = page;
        this.signInAccessBtn = page.locator("//button[.='Sign In']");
        this.emailTF = page.getByLabel("Email Address");
        this.passwordTF = page.getByLabel("Password");
        this.signInBtn = page.locator("//button[contains(.,'Sign In')]");
    }

    async signIn(url,email,password)
    {
        await this.page.goto(url);
        await this.signInAccessBtn.click();
        await this.emailTF.fill(email);
        await this.passwordTF.fill(password);
        await this.signInBtn.click();
    }

}
export default LoginPage