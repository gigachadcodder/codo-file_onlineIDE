import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by Batch B-30 (Abhay, Adhitya, Aditya)</p>
        </div>
    </>
  )
}

export default Footer