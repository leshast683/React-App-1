import { useState, useCallback } from "react"

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  let [menuItems, setMenuItems] = useState(initialMenuItems) // TODO 2: Maintain menu state
  let [filter, setFilter] = useState("")

  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems([newMenuItem, ...menuItems]) // TODO 3: Add new menu item
      setNewMenuItem("")
    }
  }, [newMenuItem, menuItems])

  const filteredMenuItems = menuItems.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  ) // TODO 4: Filter menu items

  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))} {/* TODO 1: Render menu items */}
      </ul>
    </div>
  )
}
