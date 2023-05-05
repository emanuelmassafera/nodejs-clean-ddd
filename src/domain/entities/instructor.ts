import Entity from '@/core/entities/entity'
import UniqueEntityID from '@/core/entities/value-objects/unique-entity-id'

interface InstructorProps {
  name: string
}

export default class Instructor extends Entity<InstructorProps> {
  get name() {
    return this.props.name
  }

  static create(
    props: InstructorProps,
    id?: UniqueEntityID
  ) {
    const instructor = new Instructor(props, id)

    return instructor
  }
}
