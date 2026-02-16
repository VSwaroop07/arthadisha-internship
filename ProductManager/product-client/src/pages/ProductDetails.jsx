import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiGet } from '../services/api.js'
import '../styles/products.css'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      setError('')

      try {
        const data = await apiGet(`/api/products/${id}`)
        setProduct(data)
      } catch (err) {
        setError(err.message || 'Unable to load product')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  if (loading) {
    return <p className="muted">Loading product...</p>
  }

  if (error) {
    return (
      <div className="panel">
        <p className="form-error">{error}</p>
        <Link className="text-link" to="/products">
          Back to products
        </Link>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="panel">
        <p className="muted">Product not found.</p>
        <Link className="text-link" to="/products">
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h1>Product details</h1>
          <p className="muted">Full record for item #{product.id}</p>
        </div>
        <Link className="ghost-button" to="/products">
          Back
        </Link>
      </div>

      <div className="panel detail-card">
        <div>
          <p className="detail-label">Name</p>
          <p className="detail-value">{product.name}</p>
        </div>
        <div>
          <p className="detail-label">Price</p>
          <p className="detail-value">
            ${Number(product.price).toFixed(2)}
          </p>
        </div>
        <div>
          <p className="detail-label">ID</p>
          <p className="detail-value">{product.id}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
