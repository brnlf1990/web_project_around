export class UserInfo {
  constructor({ nameProfile, aboutProfile, avatar }) {
    this._nameProfile = document.querySelector(nameProfile);
    this._aboutProfile = document.querySelector(aboutProfile);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const name = this._nameProfile.textContent;
    const about = this._aboutProfile.textContent;
    const avatar = this._avatar.src;

    return { name, about, avatar };
  }
  setUserInfo({ name, about, avatar }) {
    this._nameProfile.textContent = name;
    this._aboutProfile.textContent = about;
    this.setAvatarImage(avatar);
  }

  setAvatarImage(avatar) {
    this._avatar.src = avatar;
  }
}
