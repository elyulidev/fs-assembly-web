import { useTranslations } from 'next-intl';

export interface Slide {
  title: string;
  content: (string | { type: 'code'; code: string })[];
}

export interface Conference {
  id: string;
  title: string;
  description: string;
  slides: Slide[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  hours: number;
  conferenceCount: number;
  conferences: Conference[];
}

type Translator = ReturnType<typeof useTranslations>;

export const getCourseData = (t: Translator): Module[] => [
  {
    id: "1",
    title: t('module1.title'),
    description: t('module1.description'),
    hours: 8,
    conferenceCount: 4,
    conferences: [
      {
        id: "1",
        title: t('module1.conference1.title'),
        description: t('module1.conference1.description'),
        slides: [
          {
            title: t('module1.conference1.slide1.title'),
            content: [
              t('module1.conference1.slide1.content1'),
              t('module1.conference1.slide1.content2'),
              t('module1.conference1.slide1.content3'),
            ],
          },
          {
            title: t('module1.conference1.slide2.title'),
            content: [
              t('module1.conference1.slide2.content1'),
              t('module1.conference1.slide2.content2'),
              t('module1.conference1.slide2.content3'),
            ],
          },
          {
            title: t('module1.conference1.slide3.title'),
            content: [
              t('module1.conference1.slide3.content1'),
              t('module1.conference1.slide3.content2'),
              t('module1.conference1.slide3.content3'),
            ],
          },
          {
            title: t('module1.conference1.slide4.title'),
            content: [
              t('module1.conference1.slide4.content1'),
              t('module1.conference1.slide4.content2'),
              t('module1.conference1.slide4.content3'),
            ],
          },
        ],
      },
      {
        id: "2",
        title: t('module1.conference2.title'),
        description: t('module1.conference2.description'),
        slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }],
      },
      {
        id: "3",
        title: t('module1.conference3.title'),
        description: t('module1.conference3.description'),
        slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }],
      },
      {
        id: "4",
        title: t('module1.conference4.title'),
        description: t('module1.conference4.description'),
        slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }],
      },
    ],
  },
  {
    id: "2",
    title: t('module2.title'),
    description: t('module2.description'),
    hours: 8,
    conferenceCount: 4,
    conferences: [
        { id: "5", title: t('module2.conference1.title'), description: t('module2.conference1.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "6", title: t('module2.conference2.title'), description: t('module2.conference2.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "7", title: t('module2.conference3.title'), description: t('module2.conference3.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "8", title: t('module2.conference4.title'), description: t('module2.conference4.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] }
    ]
  },
  {
    id: "3",
    title: t('module3.title'),
    description: t('module3.description'),
    hours: 8,
    conferenceCount: 4,
    conferences: [
        { id: "9", title: t('module3.conference1.title'), description: t('module3.conference1.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "10", title: t('module3.conference2.title'), description: t('module3.conference2.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "11", title: t('module3.conference3.title'), description: t('module3.conference3.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "12", title: t('module3.conference4.title'), description: t('module3.conference4.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] }
    ]
  },
  {
    id: "4",
    title: t('module4.title'),
    description: t('module4.description'),
    hours: 8,
    conferenceCount: 4,
    conferences: [
        { id: "13", title: t('module4.conference1.title'), description: t('module4.conference1.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "14", title: t('module4.conference2.title'), description: t('module4.conference2.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "15", title: t('module4.conference3.title'), description: t('module4.conference3.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "16", title: t('module4.conference4.title'), description: t('module4.conference4.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] }
    ]
  },
  {
    id: "5",
    title: t('module5.title'),
    description: t('module5.description'),
    hours: 8,
    conferenceCount: 4,
    conferences: [
        { id: "17", title: t('module5.conference1.title'), description: t('module5.conference1.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "18", title: t('module5.conference2.title'), description: t('module5.conference2.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "19", title: t('module5.conference3.title'), description: t('module5.conference3.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "20", title: t('module5.conference4.title'), description: t('module5.conference4.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] }
    ]
  },
  {
    id: "6",
    title: t('module6.title'),
    description: t('module6.description'),
    hours: 8,
    conferenceCount: 4,
    conferences: [
        { id: "21", title: t('module6.conference1.title'), description: t('module6.conference1.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "22", title: t('module6.conference2.title'), description: t('module6.conference2.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "23", title: t('module6.conference3.title'), description: t('module6.conference3.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] },
        { id: "24", title: t('module6.conference4.title'), description: t('module6.conference4.description'), slides: [{ title: t('toBeAdded.title'), content: [t('toBeAdded.content')] }] }
    ]
  }
];
