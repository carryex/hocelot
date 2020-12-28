import userIcon from '../images/blocks/name.svg'

export const initialBlocksData = [
  {
    id: 1,
    type: 'name',
    options: ['last name', 'second name', 'full name'],
    selectedOption: '',
    icon: userIcon,
    value: 'firstName',
    isConfirmed: true
  },
  {
    id: 2,
    type: 'phone',
    options: ['phone number', 'work phone'],
    selectedOption: '',
    value: 'phone_N',
    isConfirmed: false
  },
  {
    id: 3,
    type: 'email',
    options: ['email adrdress'],
    selectedOption: '',
    value: 'email',
    isConfirmed: false
  },
  {
    id: 4,
    type: 'document',
    options: ['document number'],
    selectedOption: '',
    value: 'DNI',
    isConfirmed: false
  },
  {
    id: 5,
    type: 'address',
    options: ['address'],
    selectedOption: '',
    value: 'adress_N',
    isConfirmed: false
  },
  {
    id: 6,
    type: 'fraud/defraud',
    options: ['fraud/defraud'],
    selectedOption: '',
    value: 'target',
    isConfirmed: false
  },
] 


export const requiredDataBlocks = [
  {
    id: 1,
    title: 'Minimums',
    items: [
      'Name',
      'ID',
      'Birthdate',
      'Address',
      'Zip code or Town',
      'Province',
      'Target',
    ],
  },
  {
    id: 2,
    title: 'Standard Minimums',
    items: ['Email', 'Fee', 'Phone', 'Term', 'Amount'],
  },
  {
    id: 3,
    title: 'Perfects',
    items: ['Margin', 'Dealing day'],
  },
]
