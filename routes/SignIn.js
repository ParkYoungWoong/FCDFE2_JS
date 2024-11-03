export default function Signin() {
  const el = document.createElement('div')
  el.innerHTML = `
    <h1>Sign In</h1>
    <form>
      <input type="email" name="email" placeholder="이메일을 입력하세요." />
      <input type="password" name="password" placeholder="비밀번호를 입력하세요." />
      <button type="submit">로그인!</button>
    </form>
  `
  const formEl = el.querySelector('form')
  formEl.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password)
    // 로그인 정보 전송 코드는 여기에!
  })
  return el
}
