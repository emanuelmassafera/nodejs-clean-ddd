import Entity from '@/core/entities/entity'
import UniqueEntityID from '@/core/entities/value-objects/unique-entity-id'

interface StudentProps {
  name: string
}

export default class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name
  }

  static create(
    props: StudentProps,
    id?: UniqueEntityID
  ) {
    const student = new Student(props, id)

    return student
  }
}
