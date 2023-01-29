const container = document.querySelector("#container")


function products() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const div = document.createElement("div")
                div.className = "card"
                container.appendChild(div)

                const img = document.createElement("img")
                img.setAttribute("src", product.image)
                img.style = "width: 233px; height: 123px"
                div.appendChild(img)

                const p1 = document.createElement("p")
                p1.innerHTML = "<strong>Price:</strong> " + product.price
                const p2 = document.createElement("p")
                p2.innerHTML = "<strong>Category:</strong> " + product.category
                const p3 = document.createElement("p")
                p3.innerHTML = "<strong>Desc:</strong> " + product.description
                const p4 = document.createElement("p")
                p4.innerHTML = "<strong>Name:</strong> " + product.title

                div.appendChild(p1)
                div.appendChild(p2)
                div.appendChild(p3)
                div.appendChild(p4)

                const icon = document.createElement("i")
                icon.className = "fa-solid fa-trash"
                div.appendChild(icon)

                icon.addEventListener("click", () => {
                    const deleteEl = confirm("Rostdan ham shu mahsulotni o'chirmoqchimisiz?")
                    if(deleteEl === true){
                        fetch(`https://fakestoreapi.com/products/${product.id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(console.log)
                        
                        div.remove()

                        alert("Mahsulot muvaffaqiyatli o'chirildi.")
                    }
                })
            })
        })
}
products()