const key = "user";

class User {
  constructor(username, email, bio) {
    this.username = username;
    this.email = email ?? "";
    this.bio = bio ?? "";

    this.saveToLocalStorage();
  }

  setState() {}

  saveToLocalStorage() {
    const userData = {
      username: this.username,
      email: this.email,
      bio: this.bio,
    };

    localStorage.setItem(key, JSON.stringify(userData));
    console.log("저장: save");
  }

  static getUserLocalStorage() {
    return JSON.parse(localStorage.getItem(key));
  }

  static removeUserLocalStorage() {
    localStorage.removeItem(key);
  }

  static isLogin() {
    return !!User.getUserLocalStorage();
  }
}

export default User;
