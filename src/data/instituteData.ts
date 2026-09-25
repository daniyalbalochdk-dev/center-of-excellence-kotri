import buildingImg from '../assets/images/institute building.jpg';
import ditBoysImg from '../assets/images/dit_lab_boys_1790297822031.jpg';
import ditGirlsImg from '../assets/images/dit_lab_girls_1790297857275.jpg';
import electricalImg from '../assets/images/electrical_work_1790297890224.jpg';
import machinistImg from '../assets/images/machinist_work_1790297931476.jpg';
import acTechImg from '../assets/images/actechnician_lab_1790297954886.jpg';
import fashionImg from '../assets/images/fashion_design_1790297994363.jpg';
import draftsmanImg from '../assets/images/junior_draftsman_1790298021218.jpg';
import chineseImg from '../assets/images/chinese_language_1790298059441.jpg';

export interface Course {
  id: string;
  code: string;
  name: string;
  category: 'Digital & IT' | 'Industrial Technical' | 'Specialized Trade' | 'Languages';
  duration: string;
  eligibility: string;
  shifts: string;
  shift?: string;
  admissionFee: number;
  admissionPeriod: string;
  classesStart: string;
  media: {
    primary: string;
    secondary?: string;
    type: 'image' | 'video_showcase';
    caption: string;
    secondaryCaption?: string;
  };
  features: string[];
  description: string;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlight: string;
}

export const INSTITUTE_INFO = {
  name: 'Center of Excellence, Kotri',
  oldName: 'TTC Kotri',
  tagline: 'Skills is the Key to Success',
  urduMotto: 'محنت میں عظمت',
  affiliation: 'Sindh Technical Education & Vocational Training Authority (STEVTA), Sindh',
  governingBody: 'Government of Sindh',
  phone: '03153705414',
  phoneDisplay: '0315-3705414',
  phoneInternational: '+923153705414',
  whatsappUrl: 'https://wa.me/923153705414?text=Assalam-o-Alaikum,%20I%20am%20interested%20in%20admission%20at%20Center%20of%20Excellence,%20Kotri.%20Please%20provide%20guidance.',
  address: {
    street: 'TB Sanitorium Road',
    landmark: 'Kotri Phatak',
    city: 'Kotri',
    full: 'TB Sanitorium Road, Kotri Phatak, Kotri',
    note: 'Old name: TTC Kotri'
  },
  mapQuery: 'TB Sanitorium Road, Kotri Phatak, Kotri, Old name TTC Kotri',
  buildingImage: buildingImg
};

export const COURSES: Course[] = [
  {
    id: 'dit',
    code: 'DIT-01',
    name: 'Diploma in Information Technology (DIT)',
    category: 'Digital & IT',
    duration: '1 Year',
    eligibility: 'Boys & Girls',
    shifts: 'Morning & Evening',
    admissionFee: 10000,
    admissionPeriod: '1 June – 31 July every year',
    classesStart: '1 August',
    media: {
      primary: ditBoysImg,
      secondary: ditGirlsImg,
      type: 'image',
      caption: 'DIT Computer Lab — Boys Session',
      secondaryCaption: 'DIT Computer Lab — Girls Session'
    },
    features: [
      'Modern high-performance computer lab',
      'Hands-on digital training & office automation',
      'Web development, programming & databases',
      'Separate lab sessions for boys and girls'
    ],
    description: 'A comprehensive 1-year professional technical diploma designed to empower students with practical digital expertise in computer applications, programming, office automation, web technologies, and database architecture.'
  },
  {
    id: 'electrical',
    code: 'ELEC-02',
    name: 'Electrical',
    category: 'Industrial Technical',
    duration: '6 Months',
    eligibility: 'Boys only',
    shifts: 'Morning & Evening',
    admissionFee: 2000,
    admissionPeriod: '1 Dec – 31 Dec (Session 1) | 1 June – 31 July (Session 2)',
    classesStart: 'After respective admission period',
    media: {
      primary: electricalImg,
      type: 'video_showcase',
      caption: 'Electrical Practical Workshop & Conduit Installation'
    },
    features: [
      'Practical wiring on live distribution boards',
      'Circuit breakers, motor control & earthing systems',
      'Domestic, commercial & industrial installations',
      'Dedicated safety equipment and electrical testing tools'
    ],
    description: 'Hands-on practical training covering domestic and industrial electrical installations, single and three-phase wiring, conduit bending, breaker panels, motor starters, and testing procedures.'
  },
  {
    id: 'machinist',
    code: 'MACH-03',
    name: 'Machinist',
    category: 'Industrial Technical',
    duration: '6 Months',
    eligibility: 'Boys only',
    shifts: 'Morning & Evening',
    admissionFee: 2000,
    admissionPeriod: '1 Dec – 31 Dec (Session 1) | 1 June – 31 July (Session 2)',
    classesStart: 'After respective admission period',
    media: {
      primary: machinistImg,
      type: 'image',
      caption: 'Machinist Workshop — Grinding & Lathe Machining'
    },
    features: [
      'Industrial lathe, shaping & milling machines',
      'Bench grinder & precision metal cutting',
      'Micrometer & vernier caliper measurement',
      'Strict workshop safety with hard hats and goggles'
    ],
    description: 'Intensive mechanical workshop training in operating metal-cutting machine tools including lathes, shapers, grinders, and drill presses to produce precision machine parts.'
  },
  {
    id: 'fashion-designing',
    code: 'FASH-04',
    name: 'Fashion Designing / Dressmaker',
    category: 'Specialized Trade',
    duration: '6 Months',
    eligibility: 'Girls only',
    shift: 'Morning',
    shifts: 'Morning',
    admissionFee: 2000,
    admissionPeriod: '1 Dec – 31 Dec (Session 1) | 1 June – 31 July (Session 2)',
    classesStart: 'After respective admission period',
    media: {
      primary: fashionImg,
      type: 'image',
      caption: 'Fashion Designing & Dressmaking Studio'
    },
    features: [
      'Pattern making, garment cutting & styling',
      'Industrial electric sewing machines',
      'Traditional & contemporary dress fabrication',
      'Empowering female vocational independence'
    ],
    description: 'A 6-month specialized program for female students covering garment construction, body measurement drafting, fabric selection, machine stitching, cutting, and modern dress designing.'
  },
  {
    id: 'ac-technician',
    code: 'HVAC-05',
    name: 'AC Technician',
    category: 'Industrial Technical',
    duration: '6 Months',
    eligibility: 'Boys only',
    shift: 'Morning',
    shifts: 'Morning',
    admissionFee: 2000,
    admissionPeriod: '1 Dec – 31 Dec (Session 1) | 1 June – 31 July (Session 2)',
    classesStart: 'After respective admission period',
    media: {
      primary: acTechImg,
      type: 'image',
      caption: 'AC Refrigeration Practical Demonstration Lab'
    },
    features: [
      'Split, window & commercial AC servicing',
      'Refrigerant gas charging & leak testing',
      'Copper tubing flaring, swaging & brazing',
      'Compressor diagnostics and electrical controls'
    ],
    description: 'Practical training in heating, ventilation, and air conditioning (HVAC) systems. Students learn refrigeration cycles, leak detection, electrical wiring of condensers, and troubleshooting.'
  },
  {
    id: 'junior-draftsman',
    code: 'DRAFT-06',
    name: 'Junior Draftsman',
    category: 'Industrial Technical',
    duration: '6 Months',
    eligibility: 'Boys only',
    shift: 'Morning',
    shifts: 'Morning',
    admissionFee: 2000,
    admissionPeriod: '1 Dec – 31 Dec (Session 1) | 1 June – 31 July (Session 2)',
    classesStart: 'After respective admission period',
    media: {
      primary: draftsmanImg,
      type: 'image',
      caption: 'Technical Drafting & Architectural Drawing Lab'
    },
    features: [
      'Architectural plans, elevations & sections',
      'Technical drafting instruments & scale geometry',
      'Introduction to computer-aided drafting (CAD)',
      'Structural blueprints and construction details'
    ],
    description: 'Technical training in preparing architectural, structural, and mechanical drawings. Covers manual drawing equipment as well as digital CAD methods used across engineering and construction.'
  },
  {
    id: 'chinese-language',
    code: 'LANG-07',
    name: 'Chinese Language Course',
    category: 'Languages',
    duration: '6 Months',
    eligibility: 'Boys & Girls',
    shift: 'Evening',
    shifts: 'Evening',
    admissionFee: 15000,
    admissionPeriod: '1 Dec – 31 Dec (Session 1) | 1 June – 31 July (Session 2)',
    classesStart: 'After respective admission period',
    media: {
      primary: chineseImg,
      type: 'image',
      caption: 'Chinese Language Training Classroom'
    },
    features: [
      'Pinyin phonetics & tonal pronunciation',
      'Essential Chinese characters & conversational fluency',
      'HSK standard curriculum alignment',
      'Valuable for CPEC & industrial trade careers'
    ],
    description: 'An evening program teaching spoken and written Mandarin Chinese. Designed for both boys and girls seeking communication skills for industrial, technical, and commercial opportunities.'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-dit-labs',
    title: 'Modern DIT Computer Laboratories',
    subtitle: 'Air-Conditioned IT Suites',
    description: 'Equipped with individual workstations for students, high-speed networking, and professional learning software.',
    iconName: 'Monitor',
    highlight: 'Separate Labs for Boys & Girls'
  },
  {
    id: 'fac-dit-practical',
    title: 'DIT Practical Computer Training',
    subtitle: '100% Hands-On Instruction',
    description: 'Curriculum focused on real-world practical computer operation, typing, software applications, and network fundamentals.',
    iconName: 'Laptop',
    highlight: 'Daily Lab Hours'
  },
  {
    id: 'fac-high-perf',
    title: 'High-Performance Computer Systems',
    subtitle: 'Modern Hardware Infrastructure',
    description: 'High-performance desktop systems in DIT labs providing smooth execution of development tools and database packages.',
    iconName: 'Cpu',
    highlight: 'Individual PC Per Student'
  },
  {
    id: 'fac-technical-training',
    title: 'Practical Technical Training',
    subtitle: 'Industry-Grade Workshops',
    description: 'Fully equipped electrical test benches, lathe machines, mechanical grinders, and refrigeration training stations.',
    iconName: 'Wrench',
    highlight: 'Industry Safety Standards'
  },
  {
    id: 'fac-ac-express-power',
    title: 'AC Classes & 24-Hour Express Line',
    subtitle: 'Uninterrupted Learning',
    description: 'Air-conditioned classrooms powered by an uninterrupted 24-hour express electricity line, ensuring training never halts.',
    iconName: 'Zap',
    highlight: '24-Hour Express Line Power'
  },
  {
    id: 'fac-prof-environment',
    title: 'Professional Learning Environment',
    subtitle: 'Disciplined Vocational Campus',
    description: 'Experienced master instructors, structured batch schedules, safety compliance, and direct STEVTA examination pathways.',
    iconName: 'Award',
    highlight: 'STEVTA Affiliated Standard'
  }
];

export const ADMISSION_CYCLES = [
  {
    programType: 'Diploma in Information Technology (DIT)',
    duration: '1 Year Program',
    eligibility: 'Boys & Girls',
    cycles: [
      {
        session: 'Annual Intake',
        admissionDates: '1 June – 31 July every year',
        classesStart: '1 August',
        fee: 'PKR 10,000',
        status: 'Annual Schedule'
      }
    ]
  },
  {
    programType: 'Chinese Language & 6-Month Technical Courses',
    coursesList: 'Electrical, Machinist, AC Technician, Fashion Designing, Junior Draftsman, Chinese Language',
    duration: '6 Months Programs',
    cycles: [
      {
        session: 'Cycle 1 (Winter Batch)',
        admissionDates: '1 December – 31 December',
        classesStart: 'After 31 December',
        fee: 'PKR 2,000 (Chinese Language: PKR 15,000)',
        status: 'Bi-Annual Schedule'
      },
      {
        session: 'Cycle 2 (Summer Batch)',
        admissionDates: '1 June – 31 July',
        classesStart: 'After 31 July',
        fee: 'PKR 2,000 (Chinese Language: PKR 15,000)',
        status: 'Bi-Annual Schedule'
      }
    ]
  }
];
