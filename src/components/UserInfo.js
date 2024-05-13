export class UserInfo {
  constructor({ nameProfile, aboutProfile }) {
    this._nameProfile = document.querySelector(nameProfile);
    this._aboutProfile = document.querySelector(aboutProfile);
  }

  getUserInfo() {
    const name = this._nameProfile.textContent;
    const about = this._aboutProfile.textContent;
    return { name, about };
  }
  setUserInfo({ name, about }) {
    this._nameProfile.textContent = name;
    this._aboutProfile.textContent = about;
  }
}
