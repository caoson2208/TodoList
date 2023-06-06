import PropTypes from 'prop-types'
import { Todo } from '../../@types/todo.type'

import classNames from 'classnames/bind'
import styles from './taskList.module.scss'
import { TodoTyeps } from '../../PropTypes/todo.proptyype'
const cx = classNames.bind(styles)

interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo, deleteTodo } = props

  const onChangeCheckBox = (idTodo: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, event.target.checked)
  }

  return (
    <div className={cx('mb-2')}>
      <h1 className={cx('title')}>{doneTaskList ? 'Hoàn  thành' : 'Chưa hoàn thành'}</h1>
      <div className={cx('tasks')}>
        {todos.map((todo) => (
          <div className={cx('task')} key={todo.id}>
            <input
              type='checkbox'
              className={cx('taskCheckbox')}
              checked={todo.done}
              onChange={onChangeCheckBox(todo.id)}
            />
            <div className={`${cx('taskName')} ${todo.done ? cx('taskNameDone') : ''}`}>{todo.name}</div>
            <div className={cx('taskActions')}>
              <button className={cx('taskBtn')} onClick={() => startEditTodo(todo.id)}>
                🖋️
              </button>
              <button
                className={cx('taskBtn')}
                onClick={() => {
                  deleteTodo(todo.id)
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

TaskList.propTypes = {
  doneTaskList: PropTypes.bool,
  todos: PropTypes.arrayOf(TodoTyeps),
  handleDoneTodo: PropTypes.func,
  startEditTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}
