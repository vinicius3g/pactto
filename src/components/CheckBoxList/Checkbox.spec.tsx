import { render, screen } from "@testing-library/react"
import { CheckBoxList } from "./CheckBoxList";

describe("checkboxList component", () => {
  it('should render a list of checkboxes with labels', () => {
    const items = ['Item 1', 'Item 2', 'Item 3']

    render(<CheckBoxList items={items} />)

    items.forEach((item, index) => {
      const checkbox = screen.getByLabelText(item)
      expect(checkbox).toBeInTheDocument()
      expect(checkbox).toHaveAttribute('type', 'checkbox')
      expect(checkbox).toHaveAttribute('id', `checkbox-${index}`)
    })
  })
})