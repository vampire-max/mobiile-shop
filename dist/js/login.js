function loginForm() {
  return {
    formData: {
      email: '',
      password: ''
    },
    show: true,

    submitData() {
      fetch('./js/user.json', {
        method: 'get',
				headers: { 'Content-Type': 'application/json' }
      })
      .then(data => data.json())
      .then(res => {
        const result = res.filter((user) => user.email === this.formData.email && user.password === this.formData.password);
        
        console.log(result.length > 0);

        if (result.length > 0) {
          window.location.href = "./home.html";
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}

