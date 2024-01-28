document.addEventListener('DOMContentLoaded', () => {
  const itemList = document.getElementById('list-products')

  async function requestItems() {
    itemList.innerHTML = ''

    const response = await fetch('/products')
    const items = await response.json()

    items.forEach((item) => {
      const list = document.createElement('li')
      list.textContent = item.name
      itemList.appendChild(list)
    })
  }

  const details = document.getElementById('details')

  window.getProduct = async function () {
    details.innerHTML = ''

    const id = document.getElementById('id').value
    const response = await fetch(`/products/${id}`)
    const product = await response.json()

    let list = document.createElement('li')
    list.textContent = product.name
    details.appendChild(list)

    list = document.createElement('li')
    list.textContent = product.description
    details.appendChild(list)

    list = document.createElement('li')
    list.textContent = product.price
    details.appendChild(list)
  }

  window.updateProduct = async function () {
    const updateId = document.getElementById('id').value
    const updateName = document.getElementById('name').value
    const updateDescription = document.getElementById('description').value
    const updatePrice = document.getElementById('price').value

    const response = await fetch(`/products/${updateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: updateName,
        description: updateDescription,
        price: updatePrice,
      }),
    })

    if (response.ok) {
      requestItems()
    } else {
      alert('Error al actualizar')
    }
  }

  //DELETE
  window.deleteProduct = async function () {
    const deleteId = document.getElementById('id').value
    const response = await fetch(`/products/${deleteId}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      requestItems()
    } else {
      alert('Error al eliminar el producto')
    }
  }
  requestItems()
  //UPDATE FORM
  window.updateItemFromIndex = async function () {
    const updateId = document.getElementById('update-form')
  }
})
