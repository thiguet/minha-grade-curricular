import faker from 'faker';
import { SubjectCardProps } from '../../src/components/SubjectCard';

export const getFakeSubjectCardProps = (): SubjectCardProps => ({
    name: faker.name.title(),
    hours: faker.random.arrayElement([68, 34]),
    acronym: faker.random.word().repeat(3),
    onClick: jest.fn(),
});
