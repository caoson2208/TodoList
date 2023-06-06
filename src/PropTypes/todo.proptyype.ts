import PropTypes from 'prop-types'

export const TodoTyeps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
})
