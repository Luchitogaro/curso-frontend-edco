import React, { createContext, useContext, useReducer, useState } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Code, X, Plus, Minus, User, ShoppingCart, Heart } from 'lucide-react';
import './ReactContextShowcase.css';

// Types
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface AppState {
  user: User | null;
  cart: CartItem[];
  favorites: number[];
  theme: 'light' | 'dark';
}

// Actions
type AppAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'TOGGLE_FAVORITE'; payload: number }
  | { type: 'TOGGLE_THEME' };

// Initial State
const initialState: AppState = {
  user: null,
  cart: [],
  favorites: [],
  theme: 'light'
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.product.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hooks
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Components
const UserProfile: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [showDetails, setShowDetails] = useState(false);

  if (!state.user) {
    return (
      <div className="user-profile">
        <button 
          onClick={() => dispatch({ type: 'SET_USER', payload: {
            id: 1,
            name: 'Juan Pérez',
            email: 'juan@ejemplo.com',
            avatar: '👤'
          }})}
          className="login-btn"
        >
          <User size={16} />
          Iniciar Sesión
        </button>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <div className="user-info">
        <span className="user-avatar">{state.user.avatar}</span>
        <span className="user-name">{state.user.name}</span>
      </div>
      <button 
        onClick={() => setShowDetails(true)}
        className="details-btn"
      >
        Ver Detalles
      </button>
      <button 
        onClick={() => dispatch({ type: 'LOGOUT' })}
        className="logout-btn"
      >
        Cerrar Sesión
      </button>

      {showDetails && createPortal(
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Perfil de Usuario</h3>
              <button onClick={() => setShowDetails(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="profile-details">
                <div className="profile-item">
                  <strong>Nombre:</strong> {state.user.name}
                </div>
                <div className="profile-item">
                  <strong>Email:</strong> {state.user.email}
                </div>
                <div className="profile-item">
                  <strong>ID:</strong> {state.user.id}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

const Cart: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <ShoppingCart size={20} />
        <span>Carrito ({totalItems})</span>
        <span className="cart-total">${totalPrice.toFixed(2)}</span>
      </div>
      
      {state.cart.length === 0 ? (
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
        </div>
      ) : (
        <div className="cart-items">
          {state.cart.map(item => (
            <div key={item.product.id} className="cart-item">
              <div className="item-info">
                <span className="item-name">{item.product.name}</span>
                <span className="item-price">${item.product.price}</span>
              </div>
              <div className="item-controls">
                <button 
                  onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.product.id, quantity: item.quantity - 1 } })}
                  disabled={item.quantity <= 1}
                  className="quantity-btn"
                >
                  <Minus size={12} />
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.product.id, quantity: item.quantity + 1 } })}
                  className="quantity-btn"
                >
                  <Plus size={12} />
                </button>
                <button 
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.product.id })}
                  className="remove-btn"
                >
                  <X size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductList: React.FC = () => {
  const { state, dispatch } = useAppContext();
  
  const products: Product[] = [
    { id: 1, name: 'Laptop Gaming', price: 999.99, image: '💻', category: 'Electrónicos' },
    { id: 2, name: 'Smartphone', price: 599.99, image: '📱', category: 'Electrónicos' },
    { id: 3, name: 'Auriculares', price: 149.99, image: '🎧', category: 'Audio' },
    { id: 4, name: 'Teclado Mecánico', price: 89.99, image: '⌨️', category: 'Periféricos' }
  ];

  return (
    <div className="product-list">
      <h3>Productos Disponibles</h3>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>
            </div>
            <div className="product-actions">
              <button 
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                className="add-to-cart-btn"
              >
                <Plus size={14} />
                Agregar
              </button>
              <button 
                onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: product.id })}
                className={`favorite-btn ${state.favorites.includes(product.id) ? 'active' : ''}`}
              >
                <Heart size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ThemeToggle: React.FC = () => {
  const { state, dispatch } = useAppContext();

  return (
    <button 
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      className={`theme-toggle ${state.theme}`}
    >
      {state.theme === 'light' ? '🌙' : '☀️'}
      {state.theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
    </button>
  );
};

const ReactContextShowcase: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCode, setShowCode] = useState(false);

  // Escape key functionality
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDetails(false);
        setShowCode(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AppProvider>
      <div className="react-context-showcase">
        <div className="showcase-header">
          <h2>⚛️ React - Context y Estado Global</h2>
          <p>Demostración interactiva de React Context API, useReducer y estado global</p>
        </div>

        <div className="app-layout">
          <div className="app-header">
            <h3>Tienda Online</h3>
            <div className="header-controls">
              <ThemeToggle />
              <UserProfile />
            </div>
          </div>

          <div className="app-content">
            <div className="main-content">
              <ProductList />
            </div>
            <div className="sidebar">
              <Cart />
            </div>
          </div>
        </div>

        <div className="showcase-actions">
          <button 
            onClick={() => setShowDetails(true)}
            className="action-button"
          >
            <Eye size={16} />
            Ver Detalles Técnicos
          </button>
          <button 
            onClick={() => setShowCode(true)}
            className="action-button"
          >
            <Code size={16} />
            Ver Código
          </button>
        </div>

        {/* Modal de Detalles Técnicos */}
        {showDetails && createPortal(
          <div className="modal-overlay" onClick={() => setShowDetails(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Detalles Técnicos - React Context</h3>
                <button onClick={() => setShowDetails(false)} className="close-btn">
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body">
                <div className="tech-section">
                  <h4>🎯 Funcionalidades Implementadas</h4>
                  <ul>
                    <li>Estado global con Context API</li>
                    <li>Gestión de estado con useReducer</li>
                    <li>Autenticación de usuario</li>
                    <li>Carrito de compras completo</li>
                    <li>Sistema de favoritos</li>
                    <li>Toggle de tema claro/oscuro</li>
                  </ul>
                </div>
                
                <div className="tech-section">
                  <h4>🛠️ Tecnologías Utilizadas</h4>
                  <ul>
                    <li><strong>React Context:</strong> Para estado global</li>
                    <li><strong>useReducer:</strong> Para lógica compleja de estado</li>
                    <li><strong>TypeScript:</strong> Para tipado estático</li>
                    <li><strong>Custom Hooks:</strong> Para encapsular lógica</li>
                    <li><strong>React Portals:</strong> Para modales</li>
                  </ul>
                </div>

                <div className="tech-section">
                  <h4>📚 Conceptos Aplicados</h4>
                  <ul>
                    <li>Patrón Provider/Consumer</li>
                    <li>Estado global vs estado local</li>
                    <li>Inmutabilidad en React</li>
                    <li>Composición de componentes</li>
                    <li>Separación de responsabilidades</li>
                    <li>Optimización de renders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

        {/* Modal de Código */}
        {showCode && createPortal(
          <div className="modal-overlay" onClick={() => setShowCode(false)}>
            <div className="modal-content code-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Código de React Context</h3>
                <button onClick={() => setShowCode(false)} className="close-btn">
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body">
                <div className="code-section">
                  <h4>Context y Provider</h4>
                  <pre className="code-block">
{`// Definir el Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider Component
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};`}
                  </pre>
                </div>

                <div className="code-section">
                  <h4>useReducer</h4>
                  <pre className="code-block">
{`// Definir acciones
type AppAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'TOGGLE_FAVORITE'; payload: number };

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.product.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }]
      };
    default:
      return state;
  }
};`}
                  </pre>
                </div>

                <div className="code-section">
                  <h4>Uso en Componentes</h4>
                  <pre className="code-block">
{`// En cualquier componente hijo
const ProductList: React.FC = () => {
  const { state, dispatch } = useAppContext();
  
  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  
  return (
    <div>
      {products.map(product => (
        <button onClick={() => addToCart(product)}>
          Agregar {product.name}
        </button>
      ))}
    </div>
  );
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </AppProvider>
  );
};

export default ReactContextShowcase;
