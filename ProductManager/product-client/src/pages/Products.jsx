import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiGet, apiPost } from '../services/api.js'
import '../styles/table.css'
import '../styles/forms.css'
import '../styles/products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [saving, setSaving] = useState(false)

  const loadProducts = async () => {
    setLoading(true)
    setError('')

    try {
      const data = await apiGet('/api/products')
      setProducts(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message || 'Unable to load products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleCreate = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')

    try {
      const payload = {
        name: name.trim(),
        price: Number(price),
      }

      await apiPost('/api/products', payload)
      setName('')
      setPrice('')
      await loadProducts()
    } catch (err) {
      setError(err.message || 'Unable to add product')
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h1>Products</h1>
          <p className="muted">Track inventory and pricing in real time.</p>
        </div>
        <div className="stats-card">
          <p className="stats-label">Total products</p>
          <p className="stats-value">{products.length}</p>
        </div>
      </div>

      <div className="grid">
        <div className="panel">
          <h2>New product</h2>
          <form className="form-grid" onSubmit={handleCreate}>
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            <label className="field">
              <span>Price</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </label>
            {error ? <p className="form-error">{error}</p> : null}
            <button className="primary-button" type="submit" disabled={saving}>
              {saving ? 'Saving...' : 'Add product'}
            </button>
          </form>
        </div>

        <div className="panel">
          <div className="table-header">
            <h2>Catalog</h2>
            <button className="ghost-button" type="button" onClick={loadProducts}>
              Refresh
            </button>
          </div>
          {loading ? (
            <p className="muted">Loading products...</p>
          ) : (
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="empty">
                        No products yet.
                      </td>
                    </tr>
                  ) : (
                    products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${Number(product.price).toFixed(2)}</td>
                        <td>
                          <Link className="text-link" to={`/products/${product.id}`}>
                            View
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Products
