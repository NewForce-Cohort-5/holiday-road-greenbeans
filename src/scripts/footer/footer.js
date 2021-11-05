export const Footer = () => {
    const footer = document.querySelector('footer');
    footer.innerHTML += `
    <footer class="bg-dark footer">
    <div class="footer-github">
      <button type="button" class="btn btn-dark btn-outline-light btn-github">
        
          <i class="bi bi-github github-logo"></i>
        
        Github
      </button>
    </div>
    <div class="footer-copyright">Greenbean Travel Agency &copy;2021</div>
  </footer>
    `
    document.querySelector('.btn-github').addEventListener("click", () => {
      window.open('https://github.com/NewForce-Cohort-5/holiday-road-greenbeans','_blank')
    })
}