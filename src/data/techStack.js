import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs, FaPython, FaJava, FaFigma, FaGitAlt, FaGithub, FaVuejs, FaAngular, FaServer, FaPaintBrush, FaVideo, FaCode } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiDart, SiMysql, SiSqlite, SiFirebase, SiSupabase, SiPostgresql, SiBlender, SiGimp, SiPostman, SiAndroidstudio } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { DiVisualstudio } from 'react-icons/di'

// Each tool: { name, icon, color }
export const techStack = [
  {
    title: 'Programming Languages',
    tools: [
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
    ],
  },
  {
    title: 'Front-end',
    tools: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Back-end',
    tools: [
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E' },
    ],
  },
  {
    title: 'Frameworks',
    tools: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Angular', icon: FaAngular, color: '#DD0031' },
      { name: 'Vue', icon: FaVuejs, color: '#4FC08D' },
    ],
  },
  {
    title: 'Database & Services',
    tools: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Design & Media',
    tools: [
      { name: 'Canva', icon: FaPaintBrush, color: '#00C4CC' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'Blender', icon: SiBlender, color: '#E87D0D' },
      { name: 'GIMP', icon: SiGimp, color: '#5C5543' },
      { name: 'CapCut', icon: FaVideo, color: '#888' },
    ],
  },
  {
    title: 'IDEs & Dev Tools',
    tools: [
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Visual Studio 2022', icon: DiVisualstudio, color: '#5C2D91' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Eclipse IDE', icon: FaCode, color: '#7F6FD9' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#181717' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Herd', icon: FaServer, color: '#F9322C' },
      { name: 'Laragon', icon: FaServer, color: '#0E83CD' },
    ],
  },
]