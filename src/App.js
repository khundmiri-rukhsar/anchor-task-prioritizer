{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useRef, useEffect, useCallback, useMemo \} from 'react';\
import \{ Upload, Settings, Sparkles, Calendar, Check, X, Plus, Minus, MoreVertical, Folder, ChevronDown, Lock, Unlock, Target, Layers, FolderPlus, Sun, Moon, FolderOpen, RefreshCw, Mic, Type, ListChecks, Coffee, Briefcase, Zap, HeartPulse, Bot, ShoppingBag, Shield, Users, Rocket, BrainCircuit, Link, Lightbulb, Clock, AlertTriangle, Edit, Save \} from 'lucide-react';\
\
// --- Reusable Icon Components ---\
const BrandIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"/></svg>;\
const UXIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>;\
const ResearchIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;\
const AdminIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;\
\
const DeepFocusIcon = (\{ className, fill = 'none', stroke = 'currentColor' \}) => (\
    <svg width="20" height="20" viewBox="0 0 48 48" className=\{className\}>\
        <circle\
            cx="24"\
            cy="16"\
            r="6"\
            fill=\{fill !== 'none' ? fill : stroke\}\
            stroke="none"\
        />\
    </svg>\
);\
\
const ActiveWorkIcon = (\{ className, fill = 'none', stroke = 'currentColor' \}) => (\
    <svg width="20" height="20" viewBox="0 0 48 48" className=\{className\}>\
        <path\
            d="M12 36 C16 28, 20 20, 24 12 C28 20, 32 28, 36 28 C32 32, 24 36, 12 36 Z"\
            fill=\{fill !== 'none' ? fill : stroke\}\
            stroke="none"\
        />\
    </svg>\
);\
\
const LaterIcon = (\{ className, fill = 'none', stroke = 'currentColor' \}) => (\
    <svg width="20" height="20" viewBox="0 0 48 48" className=\{className\}>\
        <path\
            d="M18 42 C20 38, 22 34, 24 30 C26 34, 28 38, 30 42"\
            stroke=\{stroke\}\
            strokeWidth="2"\
            fill="none"\
            strokeLinecap="round"\
            strokeLinejoin="round"\
        />\
    </svg>\
);\
\
const AnimatedLogo = (\{\
  size = 48,\
  showPulse = true,\
  variant = 'default',\
  className = '',\
  colors: propColors\
\}) => \{\
  const baseColors = \{\
    primary: '#8B2635',\
    tertiary: '#7A9BAE',\
    white: '#FFFFFF',\
    black: '#000000'\
  \};\
\
  const getColors = () => \{\
    switch (variant) \{\
      case 'monochrome':\
        return \{ primary: baseColors.black, tertiary: baseColors.black \};\
      case 'white':\
        return \{ primary: baseColors.white, tertiary: baseColors.white \};\
      default:\
        return \{ primary: propColors.primary, tertiary: propColors.tertiary \};\
    \}\
  \};\
\
  const logoColors = getColors();\
\
  return (\
    <div className=\{`relative $\{className\}`\}>\
      <svg width=\{size\} height=\{size\} viewBox="0 0 48 48">\
        <path\
          d="M12 36 C16 28, 20 20, 24 12 C28 20, 32 28, 36 28 C32 32, 24 36, 12 36 Z"\
          fill=\{logoColors.tertiary\}\
          className="opacity-80"\
        />\
        <circle\
          cx="24"\
          cy="16"\
          r="6"\
          fill=\{logoColors.primary\}\
          className=\{showPulse ? "animate-pulse opacity-90" : "opacity-90"\}\
        />\
        <path\
          d="M18 42 C20 38, 22 34, 24 30 C26 34, 28 38, 30 42"\
          stroke=\{logoColors.primary\}\
          strokeWidth="2"\
          fill="none"\
          className="opacity-60"\
        />\
      </svg>\
    </div>\
  );\
\};\
\
\
// --- Constants ---\
const COMMON_TASKS = \{\
    "Discovery & Strategy": ["User journey mapping", "Competitive analysis deck", "Define product value proposition", "User persona development", "Stakeholder interviews & synthesis"],\
    "0-to-1 Product MVP": ["Wireframe core user flow", "High-fidelity mockups for MVP", "Clickable prototype (Figma)", "Design system v0.1 (styles, components)", "Landing page design & copy"],\
    "Brand & Identity": ["Logo exploration & refinement", "Brand guidelines (1-pager)", "Pitch deck design update", "Social media asset templates", "Initial marketing site design"],\
    "Growth & User Feedback": ["Design A/B tests for onboarding", "Analyze user session recordings", "Create user feedback survey", "Design email templates", "Update designs based on feedback"],\
\};\
\
// --- Onboarding Component (REFINED) ---\
const ProgressiveOnboarding = (\{ onComplete, colors \}) => \{\
    const [activeTab, setActiveTab] = useState('type');\
    const [typedText, setTypedText] = useState('');\
    const [transcribedText, setTranscribedText] = useState('');\
    const [selectedTasks, setSelectedTasks] = useState([]);\
    const [isRecording, setIsRecording] = useState(false);\
    const [isProcessing, setIsProcessing] = useState(false);\
    const recognitionRef = useRef(null);\
\
    useEffect(() => \{\
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\
        if (SpeechRecognition) \{\
            const recognition = new SpeechRecognition();\
            recognition.continuous = true;\
            recognition.interimResults = true;\
            recognition.onresult = (event) => \{\
                let finalTranscript = '';\
                for (let i = event.resultIndex; i < event.results.length; ++i) \{\
                    if (event.results[i].isFinal) \{\
                        finalTranscript += event.results[i][0].transcript;\
                    \}\
                \}\
                setTranscribedText(prev => prev + finalTranscript);\
            \};\
            recognitionRef.current = recognition;\
        \}\
    \}, []);\
\
    const handleToggleRecording = () => \{\
        if (!recognitionRef.current) return;\
        if (isRecording) \{\
            recognitionRef.current.stop();\
            setIsRecording(false);\
        \} else \{\
            recognitionRef.current.start();\
            setIsRecording(true);\
        \}\
    \};\
\
    const handleStartOver = () => \{\
        setTypedText('');\
        setTranscribedText('');\
        setSelectedTasks([]);\
    \};\
\
    const handleSubmit = () => \{\
        setIsProcessing(true);\
        const userProfile = \{ role: 'Founding Designer', workStyle: '' \}; // Simplified profile\
        const combinedTasks = [typedText, transcribedText, ...selectedTasks].filter(Boolean).join('\\n');\
        setTimeout(() => onComplete(userProfile, combinedTasks), 500); // Add a small delay to show processing state\
    \};\
\
    const handleTaskToggle = (task) => \{\
        setSelectedTasks(prev =>\
            prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task]\
        );\
    \};\
\
    const isSubmitDisabled = !typedText.trim() && !transcribedText.trim() && selectedTasks.length === 0;\
\
    const TabButton = (\{ id, label, icon \}) => (\
        <button onClick=\{() => setActiveTab(id)\} className=\{`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors $\{activeTab === id ? 'bg-white shadow-sm' : 'text-gray-500 hover:bg-gray-200/50'\}`\}>\
            \{icon\} \{label\}\
        </button>\
    );\
\
    return (\
        <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-3xl shadow-xl border border-gray-200/80">\
            <div className="flex items-center gap-2 mb-8">\
                <AnimatedLogo colors=\{colors\} size=\{56\} />\
                <div>\
                  <h1 className="text-2xl font-light tracking-wide" style=\{\{ color: colors.primary \}\}>Anchor</h1>\
                  <p className="text-sm text-gray-500">Your Design Workflow Companion</p>\
                </div>\
            </div>\
\
            <div className="text-center mb-8">\
                <h1 className="text-3xl font-bold text-gray-800">Transform task chaos into clear priorities</h1>\
                <p className="text-gray-500 mt-2">Get it out of your head. Get organized.</p>\
            </div>\
\
            <div className="p-1.5 bg-gray-100 rounded-xl flex justify-center items-center gap-2 mb-8">\
                <TabButton id="type" label="Type it out" icon=\{<Type size=\{16\}/>\} />\
                <TabButton id="talk" label="Talk it out" icon=\{<Mic size=\{16\}/>\} />\
                <TabButton id="pick" label="Pick from common tasks" icon=\{<ListChecks size=\{16\}/>\} />\
            </div>\
\
            <div className="relative">\
                \{activeTab === 'type' && (\
                    <textarea\
                        value=\{typedText\}\
                        onChange=\{(e) => setTypedText(e.target.value)\}\
                        placeholder="e.g., Finalize MVP mockups, prep for stakeholder review, user research synthesis, and update the brand guidelines..."\
                        className="w-full p-6 text-lg rounded-2xl border-2 focus:outline-none resize-none transition-all duration-300 font-light min-h-[200px] bg-gray-50 border-gray-200 text-gray-800 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10"\
                        rows="8"\
                    />\
                )\}\
                \{activeTab === 'talk' && (\
                    <div className="text-center p-6 flex flex-col items-center justify-center min-h-[200px] bg-gray-50 rounded-2xl border-2 border-gray-200">\
                        \{recognitionRef.current ? (\
                            <>\
                                <button onClick=\{handleToggleRecording\} className=\{`w-20 h-20 rounded-full flex items-center justify-center transition-colors $\{isRecording ? 'bg-red-500 text-white' : 'bg-white text-gray-600 shadow-md'\}`\}>\
                                    <Mic size=\{32\} />\
                                </button>\
                                <p className="mt-4 font-semibold">\{isRecording ? "Recording..." : "Hold to record"\}</p>\
                                <p className="text-gray-500 text-sm mt-1">Just brain dump out loud \'96 I'll transcribe and organize it.</p>\
                                \{transcribedText && <p className="mt-4 text-left text-sm text-gray-600 p-2 bg-gray-100 rounded-md w-full">\{transcribedText\}</p>\}\
                            </>\
                        ) : (\
                            <p className="text-gray-500">Microphone not available. Please switch to typing.</p>\
                        )\}\
                    </div>\
                )\}\
                \{activeTab === 'pick' && (\
                    <div className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 max-h-[300px] overflow-y-auto">\
                        <div className="space-y-5">\
                            \{Object.entries(COMMON_TASKS).map(([category, tasks]) => (\
                                <div key=\{category\}>\
                                    <h4 className="font-semibold text-gray-700 mb-3">\{category\}</h4>\
                                    <div className="flex flex-wrap gap-2">\
                                        \{tasks.map(task => \{\
                                            const isSelected = selectedTasks.includes(task);\
                                            return (\
                                                <button\
                                                    key=\{task\}\
                                                    onClick=\{() => handleTaskToggle(task)\}\
                                                    className=\{`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border $\{isSelected ? 'text-white' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'\}`\}\
                                                    style=\{isSelected ? \{backgroundColor: '#1A365D', borderColor: '#1A365D'\} : \{\}\}\
                                                >\
                                                    \{task\}\
                                                </button>\
                                            )\
                                        \})\}\
                                    </div>\
                                </div>\
                            ))\}\
                        </div>\
                    </div>\
                )\}\
            </div>\
\
            <div className="mt-8 flex items-end justify-between">\
                <button onClick=\{handleStartOver\} className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"><RefreshCw size=\{12\}/> Start over</button>\
                <button onClick=\{handleSubmit\} disabled=\{isSubmitDisabled || isProcessing\} className="px-6 py-3 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" style=\{\{ background: `linear-gradient(135deg, $\{colors.primary\}, $\{colors.secondary\})` \}\}>\
                    \{isProcessing ? (\
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>\
                    ) : (\
                        <Sparkles size=\{20\} />\
                    )\}\
                    <span>\{isProcessing ? 'Organizing...' : 'Organize & Prioritize'\}</span>\
                </button>\
            </div>\
        </div>\
    );\
\};\
\
\
// --- Review Modal Component (UPDATED for Feature 4) ---\
const SmartReviewModal = (\{ analysisResult, onConfirm, onCancel, colors, priorityStyles, setUserProfile \}) => \{\
    const allTasks = Object.values(analysisResult.tasksByTheme).flat();\
    \
    // Priority-first assignment - urgent work overrides capacity limits\
    const deepFocusTasks = [];\
    const activeWorkTasks = [];\
    const laterTasks = [];\
    let deepFocusHours = 0;\
    let activeWorkHours = 0;\
\
    // Sort by urgency and priority\
    const sortedTasks = allTasks.sort((a, b) => \{\
        const urgencyOrder = \{ critical: 1, urgent: 2, high: 3, normal: 4 \};\
        const priorityOrder = \{ high: 1, medium: 2, low: 3 \};\
        \
        const aUrgency = parseDeadlineUrgency(a.deadline);\
        const bUrgency = parseDeadlineUrgency(b.deadline);\
        const aPriority = priorityOrder[normalizePriority(a.priority)] || 2;\
        const bPriority = priorityOrder[normalizePriority(b.priority)] || 2;\
        \
        // Urgency first, then priority\
        if (urgencyOrder[aUrgency] !== urgencyOrder[bUrgency]) \{\
            return urgencyOrder[aUrgency] - urgencyOrder[bUrgency];\
        \}\
        return aPriority - bPriority;\
    \});\
\
    // Assign tasks with intelligent priority override\
    sortedTasks.forEach(task => \{\
        const taskHours = parseTimeEstimateToHours(task.timeEstimate) || 1;\
        const priority = normalizePriority(task.priority);\
        const urgency = parseDeadlineUrgency(task.deadline);\
        \
        // Critical/urgent tasks ALWAYS go to Deep Focus regardless of time\
        if (urgency === 'critical' || urgency === 'urgent') \{\
            deepFocusTasks.push(task);\
            deepFocusHours += taskHours;\
        \}\
        // High priority tasks go to Deep Focus unless already heavily overloaded\
        else if (priority === 'high') \{\
            if (deepFocusHours <= 8) \{ // Allow Deep Focus to expand for high priority\
                deepFocusTasks.push(task);\
                deepFocusHours += taskHours;\
            \} else \{\
                activeWorkTasks.push(task);\
                activeWorkHours += taskHours;\
            \}\
        \}\
        // Medium priority fills Deep Focus up to reasonable limit, then Active Work\
        else if (priority === 'medium') \{\
            if (deepFocusHours <= 4) \{\
                deepFocusTasks.push(task);\
                deepFocusHours += taskHours;\
            \} else if (activeWorkHours <= 4) \{\
                activeWorkTasks.push(task);\
                activeWorkHours += taskHours;\
            \} else \{\
                laterTasks.push(task);\
            \}\
        \}\
        // Low priority goes to Active Work or Later\
        else \{\
            if (activeWorkHours <= 4) \{\
                activeWorkTasks.push(task);\
                activeWorkHours += taskHours;\
            \} else \{\
                laterTasks.push(task);\
            \}\
        \}\
    \});\
    \
    // After all tasks are assigned to sections, sort each section by deadline urgency\
    const sortByDeadlineUrgency = (tasks) => \{\
        return tasks.sort((a, b) => \{\
            const urgencyOrder = \{ critical: 1, urgent: 2, high: 3, normal: 4 \};\
            const aUrgency = parseDeadlineUrgency(a.deadline);\
            const bUrgency = parseDeadlineUrgency(b.deadline);\
            \
            if (urgencyOrder[aUrgency] !== urgencyOrder[bUrgency]) \{\
                return urgencyOrder[aUrgency] - urgencyOrder[bUrgency];\
            \}\
            \
            // Secondary sort: high priority first\
            const priorityOrder = \{ high: 1, medium: 2, low: 3 \};\
            const aPriority = priorityOrder[normalizePriority(a.priority)] || 2;\
            const bPriority = priorityOrder[normalizePriority(b.priority)] || 2;\
            \
            return aPriority - bPriority;\
        \});\
    \};\
\
    sortByDeadlineUrgency(deepFocusTasks);\
    sortByDeadlineUrgency(activeWorkTasks);\
    sortByDeadlineUrgency(laterTasks);\
\
\
   const handleConfirm = () => \{\
     // Collect all tasks from all sections with proper timeline categories\
     const allTasksWithCategories = [\
         ...deepFocusTasks.map(task => (\{ ...task, timelineCategory: 'deepFocus' \})),\
         ...activeWorkTasks.map(task => (\{ ...task, timelineCategory: 'activeWork' \})),\
         ...laterTasks.map(task => (\{ ...task, timelineCategory: 'later' \}))\
     ];\
\
     onConfirm(allTasksWithCategories);\
   \};\
\
    const renderEnergyIcon = (energy) => \{\
        const energyStr = Array.isArray(energy) ? energy.join(', ').toLowerCase() : (energy || '').toLowerCase();\
        if (energyStr.includes('creative')) return <Sparkles size=\{14\} className="inline-block mr-1" />;\
        if (energyStr.includes('administrative')) return <Briefcase size=\{14\} className="inline-block mr-1" />;\
        if (energyStr.includes('collaborative')) return <Users size=\{14\} className="inline-block mr-1" />;\
        return <Zap size=\{14\} className="inline-block mr-1" />;\
    \};\
\
    const conflicts = validateTimelines(allTasks);\
\
    return (\
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">\
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">\
                <div className="p-8 pb-8">\
                    <h2 className="text-3xl font-light tracking-wide mb-2" style=\{\{ color: colors.primary \}\}>Ready to Anchor?</h2>\
                    <p className="text-gray-500 text-lg mb-2">Here's a realistic plan for today based on your energy and priorities.</p>\
                    \{conflicts.length > 0 && (\
                        <div className="p-4 bg-amber-50 border-l-4 border-amber-400 my-4">\
                            <div className="text-sm text-amber-800">\
                                <strong>Timeline Conflicts:</strong>\
                                \{conflicts.map(c => <p key=\{c.type\}>\{c.message\}. \{c.suggestion\}</p>)\}\
                            </div>\
                        </div>\
                    )\}\
                    <p className="text-sm text-gray-400">\
                        ~\{Math.round(deepFocusHours + activeWorkHours)\} hours planned \'95 \{deepFocusTasks.length + activeWorkTasks.length\} tasks \
                        \{deepFocusHours > 6 && <span className="text-amber-600 font-semibold"> \'95 Intensive day - consider priorities</span>\}\
                    </p>\
                </div>\
                <div className="px-8 pb-2 overflow-y-auto">\
                    \{[\
                        \{ title: 'Deep Focus', tasks: deepFocusTasks \},\
                        \{ title: 'Active Work', tasks: activeWorkTasks \},\
                        \{ title: 'Later', tasks: laterTasks \}\
                    ].map((section, index) => section.tasks.length > 0 && (\
                        <div key=\{section.title\}>\
                            \{index > 0 && (\
                                <div className="flex items-center justify-center py-8">\
                                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>\
                                    <div className="mx-4 flex space-x-1">\
                                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>\
                                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>\
                                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>\
                                    </div>\
                                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>\
                                </div>\
                            )\}\
                            <div className="py-6">\
                                <h3 className="text-2xl font-light mb-6" style=\{\{ color: '#1A365D' \}\}>\{section.title\}</h3>\
                                <ul className="space-y-4">\
                                    \{section.tasks.map(task => \{\
                                        const priorityKey = normalizePriority(task.priority);\
                                        const priorityStyle = priorityStyles[priorityKey];\
                                        return (\
                                            <li key=\{task.id\} className="p-4 rounded-lg border-2 flex flex-col" style=\{\{ borderColor: priorityStyle.color, backgroundColor: priorityStyle.bg \}\}>\
                                                <div className="flex items-start justify-between mb-2">\
                                                    <h4 className="font-semibold text-gray-800 pr-4">\{task.text\}</h4>\
                                                    <span className="text-xs font-bold px-2 py-1 rounded-full capitalize" style=\{\{backgroundColor: 'rgba(255,255,255,0.6)', color: priorityStyle.color\}\}>\{task.priority\}</span>\
                                                </div>\
                                                <div className="text-sm text-gray-700 space-y-2 flex-grow">\
                                                    <p><span className="font-semibold" style=\{\{color: colors.text\}\}>Impact:</span> \{task.businessImpact\}</p>\
                                                    <p><span className="font-semibold" style=\{\{color: colors.text\}\}>Why now:</span> \{task.reasoning\}</p>\
                                                </div>\
                                                <div className="mt-3 border-t pt-2 flex justify-between items-center text-xs text-gray-600" style=\{\{borderColor: 'rgba(0,0,0,0.1)'\}\}>\
                                                    <div className="flex items-center gap-1.5">\
                                                        \{renderEnergyIcon(task.energy)\}\
                                                        <span className="font-medium">\{Array.isArray(task.energy) ? task.energy.join(', ') : task.energy\}</span>\
                                                    </div>\
                                                    <div className="flex items-center gap-1.5 font-medium">\
                                                        <Clock size=\{12\} />\
                                                        <span>\{formatTimeEstimate(task.timeEstimate)\}</span>\
                                                    </div>\
                                                </div>\
                                            </li>\
                                        );\
                                    \})\}\
                                </ul>\
                            </div>\
                        </div>\
                    ))\}\
                </div>\
                <div className="p-8 pt-6 flex justify-end gap-4">\
                    <button onClick=\{onCancel\} className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors">Cancel</button>\
                    <button onClick=\{handleConfirm\} className="px-8 py-3 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all" style=\{\{ background: `linear-gradient(135deg, $\{colors.primary\}, $\{colors.secondary\})` \}\}>Confirm & Add to Canvas</button>\
                </div>\
            </div>\
        </div>\
    );\
\};\
\
// --- List View Component ---\
const ListView = (\{ tasks, priorityStyles, toggleComplete, groupBy = 'priority', setSelectedTask, renderIcon \}) => \{\
    const groupedTasks = tasks.reduce((acc, task) => \{\
        const groupKey = groupBy === 'priority' ? normalizePriority(task.priority) : (task.category || 'Uncategorized');\
        if (!acc[groupKey]) \{\
            acc[groupKey] = [];\
        \}\
        acc[groupKey].push(task);\
        return acc;\
    \}, \{\});\
\
    const sortedGroups = Object.entries(groupedTasks);\
    if (groupBy === 'priority') \{\
        sortedGroups.sort(([a], [b]) => ['high', 'medium', 'low'].indexOf(a) - ['high', 'medium', 'low'].indexOf(b));\
    \} else \{\
        sortedGroups.sort(([a], [b]) => a.localeCompare(b));\
    \}\
\
    return (\
    <div className="space-y-4">\
        \{sortedGroups.map(([group, tasksInGroup]) => (\
            <div key=\{group\}>\
                <h3 className="text-lg font-semibold mb-2 capitalize" style=\{\{color: groupBy === 'priority' ? priorityStyles[group]?.color : '#3D3D3D'\}\}>\
                    \{group\} \{groupBy === 'priority' && 'Priority'\}\
                </h3>\
                <ul className="space-y-2">\
                    \{tasksInGroup.map(task => (\
                        <li key=\{task.id\} className="bg-white p-4 rounded-lg shadow-sm border flex items-start justify-between cursor-pointer hover:shadow-md transition-shadow" onClick=\{() => setSelectedTask(task)\}>\
                            <div className="flex items-center gap-3">\
                                <button onClick=\{(e) => \{ e.stopPropagation(); toggleComplete(task.id); \}\} className=\{`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 $\{task.completed ? 'border-green-500 bg-green-500' : 'border-gray-300'\}`\}>\
                                    \{task.completed && <Check size=\{16\} className="text-white"/>\}\
                                </button>\
                                <div className="flex-shrink-0 mt-1">\
                                    \{renderIcon(task.category)\}\
                                </div>\
                                <div className="flex-1">\
                                    <p className=\{`font-semibold leading-tight $\{task.completed ? 'line-through text-gray-400' : 'text-gray-800'\}`\}>\{task.shortText || task.text\}</p>\
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">\
                                        \{groupBy === 'priority' && task.category && (\
                                            <span className="font-semibold bg-gray-100 px-2 py-0.5 rounded-full">\{task.category\}</span>\
                                        )\}\
                                        \{groupBy === 'category' && (\
                                            <span\
                                                className="font-bold capitalize px-2 py-0.5 rounded-full"\
                                                style=\{\{\
                                                    backgroundColor: priorityStyles[normalizePriority(task.priority)].bg,\
                                                    color: priorityStyles[normalizePriority(task.priority)].color\
                                                \}\}\
                                            >\
                                                \{task.priority\}\
                                            </span>\
                                        )\}\
                                    </div>\
                                </div>\
                            </div>\
                            <div className="flex items-center gap-2 text-xs text-gray-500 flex-shrink-0 ml-4">\
                                <div className="flex items-center gap-1">\
                                    <Clock size=\{12\} />\
                                    <span>~\{task.timeEstimate\}</span>\
                                </div>\
                                <>\
                                    <span className="text-gray-300">|</span>\
                                    <span className=\{`font-semibold $\{task.deadline && task.deadline.toLowerCase() !== 'n/a' ? 'text-gray-800' : 'text-gray-500'\}`\}>\
                                        \{task.deadline && task.deadline.toLowerCase() !== 'n/a' ? `Due: $\{task.deadline\}` : (task.deadline || 'TBD')\}\
                                    </span>\
                                </>\
                            </div>\
                        </li>\
                    ))\}\
                </ul>\
            </div>\
        ))\}\
    </div>\
    );\
\};\
\
// --- Task Detail Modal ---\
const TaskDetailModal = (\{ task, onClose, onSave, colors, priorityStyles \}) => \{\
    if (!task) return null;\
\
    const [isEditing, setIsEditing] = useState(false);\
    const [editableTask, setEditableTask] = useState(task);\
\
    useEffect(() => \{\
        setEditableTask(task);\
    \}, [task]);\
\
    const handleSave = () => \{\
        onSave(editableTask);\
        setIsEditing(false);\
    \};\
\
    const priorityKey = normalizePriority(editableTask.priority);\
    const priorityStyle = priorityStyles[priorityKey];\
\
    return (\
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick=\{onClose\}>\
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick=\{e => e.stopPropagation()\}>\
                <div className="p-6 border-b flex justify-between items-start" style=\{\{borderColor: priorityStyle.bg\}\}>\
                    \{isEditing ? (\
                        <input\
                            type="text"\
                            value=\{editableTask.text\}\
                            onChange=\{(e) => setEditableTask(\{...editableTask, text: e.target.value\})\}\
                            className="text-2xl font-bold text-gray-800 w-full border-b-2 -mb-1 pb-1"\
                        />\
                    ) : (\
                        <h2 className="text-2xl font-bold text-gray-800 capitalize">\{editableTask.text\}</h2>\
                    )\}\
                    <button onClick=\{onClose\} className="p-2 -m-2 text-gray-400 hover:text-gray-600"><X size=\{24\}/></button>\
                </div>\
\
                <div className="p-6 overflow-y-auto space-y-6">\
                    \{/* --- METADATA ROW --- */\}\
                    <div className="grid grid-cols-3 gap-4 text-sm">\
                        <div className="bg-gray-50 p-3 rounded-lg">\
                            <div className="font-semibold text-gray-500 mb-1">Priority</div>\
                            \{isEditing ? (\
                                <select value=\{editableTask.priority\} onChange=\{e => setEditableTask(\{...editableTask, priority: e.target.value\})\} className="w-full p-1 border rounded">\
                                    <option value="high">High</option>\
                                    <option value="medium">Medium</option>\
                                    <option value="low">Low</option>\
                                </select>\
                            ) : (\
                                <div className="flex items-center gap-2">\
                                    <div className="w-3 h-3 rounded-full" style=\{\{backgroundColor: priorityStyle.color\}\}></div>\
                                    <span className="font-bold capitalize" style=\{\{color: priorityStyle.color\}\}>\{editableTask.priority\}</span>\
                                </div>\
                            )\}\
                        </div>\
                         <div className="bg-gray-50 p-3 rounded-lg">\
                            <div className="font-semibold text-gray-500 mb-1">Time Estimate</div>\
                             \{isEditing ? (\
                                <input type="text" value=\{editableTask.timeEstimate\} onChange=\{e => setEditableTask(\{...editableTask, timeEstimate: e.target.value\})\} className="w-full p-1 border rounded"/>\
                            ) : (\
                                <div className="font-bold text-gray-800">\{editableTask.timeEstimate || 'N/A'\}</div>\
                            )\}\
                        </div>\
                         <div className="bg-gray-50 p-3 rounded-lg">\
                            <div className="font-semibold text-gray-500 mb-1">Deadline</div>\
                             \{isEditing ? (\
                                <input type="text" value=\{editableTask.deadline || ''\} onChange=\{e => setEditableTask(\{...editableTask, deadline: e.target.value\})\} className="w-full p-1 border rounded" placeholder="TBD"/>\
                            ) : (\
                                <div className="font-bold text-gray-800">\{editableTask.deadline || 'TBD'\}</div>\
                            )\}\
                        </div>\
                    </div>\
\
                    \{/* --- IMPACT & REASONING --- */\}\
                    <div>\
                        <h3 className="font-semibold text-gray-700 mb-2">Business Impact</h3>\
                         \{isEditing ? (\
                            <textarea value=\{editableTask.businessImpact\} onChange=\{e => setEditableTask(\{...editableTask, businessImpact: e.target.value\})\} className="w-full p-2 border rounded text-gray-600" rows="2"/>\
                        ) : (\
                            <p className="text-gray-600">\{editableTask.businessImpact\}</p>\
                        )\}\
                    </div>\
                     <div>\
                        <h3 className="font-semibold text-gray-700 mb-2">AI Reasoning</h3>\
                        <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">\{editableTask.reasoning\}</p>\
                    </div>\
\
                    \{/* --- SUBTASKS --- */\}\
                    <div>\
                        <h3 className="font-semibold text-gray-700 mb-2">Sub-tasks</h3>\
                        <ul className="space-y-2">\
                            \{(editableTask.subtasks || []).map((sub, i) => (\
                                <li key=\{i\} className="flex items-center gap-3">\
                                    <div className="w-5 h-5 border-2 border-gray-300 rounded-md"></div>\
                                    <span className="text-gray-800">\{sub\}</span>\
                                </li>\
                            ))\}\
                        </ul>\
                    </div>\
                </div>\
\
                <div className="p-4 border-t bg-gray-50 flex justify-end gap-4 rounded-b-2xl">\
                    \{isEditing ? (\
                        <>\
                            <button onClick=\{() => setIsEditing(false)\} className="px-4 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold">Cancel</button>\
                            <button onClick=\{handleSave\} className="px-6 py-2 text-white rounded-lg font-semibold flex items-center gap-2" style=\{\{ background: colors.primary \}\}><Save size=\{16\}/> Save Changes</button>\
                        </>\
                    ) : (\
                        <button onClick=\{() => setIsEditing(true)\} className="px-6 py-2 text-white rounded-lg font-semibold flex items-center gap-2" style=\{\{ background: colors.primary \}\}><Edit size=\{16\}/> Edit Task</button>\
                    )\}\
                </div>\
            </div>\
        </div>\
    );\
\};\
\
\
// Tag tasks by position in each list: top third \uc0\u8594  high, middle \u8594  medium, rest \u8594  low\
const assignPriorities = (analysis) => \{\
  Object.values(analysis.tasksByTheme).forEach(list => \{\
    const len = list.length;\
    list.forEach((t, i) => \{\
      const ratio = (i + 1) / len;\
      t.priority = ratio <= 0.33 ? 'high' : ratio <= 0.66 ? 'medium' : 'low';\
    \});\
  \});\
\};\
\
// Convert any variant to 'high' | 'medium' | 'low'\
const normalizePriority = (p) => \{\
  if (!p) return 'medium';\
  const t = String(p).toLowerCase();\
  if (t.includes('high')) return 'high';\
  if (t.includes('low'))  return 'low';\
  return 'medium';\
\};\
\
// --- Helper Functions for Text Formatting ---\
const formatDueDate = (deadline) => \{\
    if (!deadline || deadline.toLowerCase() === 'n/a' || deadline.toLowerCase() === 'tbd') \{\
        return 'Due: TBD';\
    \}\
    const tbdMatch = deadline.match(/tbd\\s*\\(([^)]+)\\)/i);\
    if (tbdMatch && tbdMatch[1]) \{\
        return `Due: $\{tbdMatch[1].charAt(0).toUpperCase() + tbdMatch[1].slice(1)\}`;\
    \}\
    return `Due: $\{deadline\}`;\
\};\
\
const formatTimeEstimate = (estimate) => \{\
    if (!estimate) return '~N/A';\
    return estimate.replace(/hours/i, 'h').replace(/\\s/g, '');\
\};\
\
const parseTimeEstimateToHours = (estimate) => \{\
    if (!estimate || typeof estimate !== 'string') return 0;\
    const lowerEstimate = estimate.toLowerCase();\
    let hours = 0;\
    if (lowerEstimate.includes('h')) \{\
        hours = parseFloat(lowerEstimate.replace('h', '')) || 0;\
    \} else if (lowerEstimate.includes('m')) \{\
        const minutes = parseFloat(lowerEstimate.replace('m', '')) || 0;\
        hours = minutes / 60;\
    \}\
    return hours;\
\};\
\
// Add these helper functions before the main App component\
const parseDeadlineUrgency = (deadline) => \{\
    if (!deadline || typeof deadline !== 'string') return 'normal';\
    const dl = deadline.toLowerCase();\
    \
    // Immediate urgency\
    if (dl.includes('asap') || dl.includes('urgent') || dl.includes('immediately') || \
        dl.includes('critical') || dl.includes('emergency')) return 'critical';\
    \
    // Today/tomorrow urgency  \
    if (dl.includes('today') || dl.includes('tomorrow') || dl.includes('eod') || \
        dl.includes('end of day')) return 'urgent';\
    \
    // This week urgency\
    if (dl.includes('this week') || dl.includes('friday') || dl.includes('week')) return 'high';\
    \
    return 'normal';\
\};\
\
const smartCapitalize = (text) => \{\
    if (!text || typeof text !== 'string') return text;\
    \
    // Split into sentences and capitalize each\
    return text.split(/([.!?]+\\s*)/).map(sentence => \{\
        if (sentence.match(/^[.!?]+\\s*$/)) return sentence; // Skip punctuation\
        \
        return sentence.replace(/\\b\\w+/g, (word, index) => \{\
            // Don't capitalize small connecting words unless they're the first word\
            const smallWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'];\
            if (index > 0 && smallWords.includes(word.toLowerCase())) \{\
                return word.toLowerCase();\
            \}\
            // Capitalize first letter, keep rest as is (preserves acronyms like UX, API)\
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();\
        \});\
    \}).join('');\
\};\
\
const enforceIntelligentPrioritization = (tasks) => \{\
    return tasks.map(task => \{\
        const urgency = parseDeadlineUrgency(task.deadline);\
        let correctedPriority = task.priority;\
        \
        // Override AI priority for obvious urgent cases\
        if (urgency === 'critical') correctedPriority = 'high';\
        else if (urgency === 'urgent' && task.priority !== 'high') correctedPriority = 'high';\
        else if (urgency === 'high' && task.priority === 'low') correctedPriority = 'medium';\
        \
        return \{\
            ...task,\
            priority: correctedPriority,\
            text: smartCapitalize(task.text),\
            shortText: task.shortText ? smartCapitalize(task.shortText) : null,\
            businessImpact: smartCapitalize(task.businessImpact)\
        \};\
    \});\
\};\
\
const extractDeadline = (text) => \{\
    const regex = /(by|due)\\s*(today|tomorrow|eod|end of day|friday|this week)/i;\
    const match = text.match(regex);\
    return match ? match[0] : null;\
\};\
\
const parseTasksClientSide = (text) => \{\
    const lines = text.split(/[,\\n]/).filter(line => line.trim());\
    const tasks = lines.map((line, index) => (\{\
        text: smartCapitalize(line.trim()),\
        priority: parseDeadlineUrgency(line) === 'critical' ? 'high' : 'medium',\
        timeEstimate: '2h', // default estimate\
        deadline: extractDeadline(line) || 'TBD',\
        businessImpact: 'Support design workflow',\
        reasoning: 'Basic parsing - AI unavailable',\
        id: `fallback-$\{index\}`\
    \}));\
    return \{ tasksByTheme: \{ 'Design Tasks': tasks \} \};\
\};\
\
const validateTimelines = (tasks) => \{\
    const conflicts = [];\
    const urgentTasks = tasks.filter(t => parseDeadlineUrgency(t.deadline) === 'urgent' || parseDeadlineUrgency(t.deadline) === 'critical');\
    const totalUrgentHours = urgentTasks.reduce((sum, t) => sum + parseTimeEstimateToHours(t.timeEstimate), 0);\
    \
    if (totalUrgentHours > 8) \{\
        conflicts.push(\{\
            type: 'impossible_timeline',\
            message: `$\{totalUrgentHours\}h of urgent work cannot be completed today`,\
            suggestion: 'Consider splitting tasks across multiple days or reducing scope'\
        \});\
    \}\
    \
    return conflicts;\
\};\
\
\
// --- Main Application Component ---\
const App = () => \{\
  // --- STATE MANAGEMENT ---\
  const [tasks, setTasks] = useState([]);\
  const [userProfile, setUserProfile] = useState(null);\
  const [showOnboarding, setShowOnboarding] = useState(true);\
  const [selectedTask, setSelectedTask] = useState(null); // For detail modal\
  const [nextTask, setNextTask] = useState(null); // Feature 6\
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);\
\
  // UI and Interaction State\
  const [inputText, setInputText] = useState(() => localStorage.getItem('anchorInputText') || '');\
  const [viewMode, setViewMode] = useState('timeline');\
  const [listGroupMode, setListGroupMode] = useState('priority'); // 'priority' or 'category'\
  const [isProcessing, setIsProcessing] = useState(false);\
  const [analysisResult, setAnalysisResult] = useState(null); // Feature 4\
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);\
  const [activeSection, setActiveSection] = useState('Deep Focus');\
  const fileInputRef = useRef(null);\
\
  // --- STYLING ---\
  const colors = \{ primary: '#8B2635', secondary: '#D4626A', tertiary: '#7A9BAE', background: '#F5F2ED', text: '#3D3D3D', subtle: '#4B5563' \};\
  const priorityStyles = \{\
    high:   \{ color: '#8B2635', bg: '#FFEBED' \},\
    medium: \{ color: '#D4626A', bg: '#FDF4F5' \},\
    low:    \{ color: '#7A9BAE', bg: '#F4F7F9' \}\
  \};\
\
  // --- CORE LOGIC ---\
  useEffect(() => \{\
    localStorage.setItem('anchorInputText', inputText);\
  \}, [inputText]);\
\
  const handleOnboardingComplete = (profile, initialTasksText) => \{\
      setUserProfile(profile);\
      setShowOnboarding(false);\
      if (initialTasksText) \{\
          handlePrioritize(initialTasksText, profile);\
      \}\
  \};\
\
  const addTasksToCanvas = (newTasksData) => \{\
     // Sort by priority first, then by other factors\
     const sortedTasks = [...newTasksData].sort((a, b) => \{\
         const priorityOrder = \{ high: 1, medium: 2, low: 3 \};\
         const aPriority = priorityOrder[normalizePriority(a.priority)] || 2;\
         const bPriority = priorityOrder[normalizePriority(b.priority)] || 2;\
\
         if (aPriority !== bPriority) \{\
             return aPriority - bPriority; // High priority first\
         \}\
\
         // Secondary sort by deadline urgency\
         const aHasDeadline = a.deadline && a.deadline.toLowerCase() !== 'tbd' && a.deadline.toLowerCase() !== 'n/a';\
         const bHasDeadline = b.deadline && b.deadline.toLowerCase() !== 'tbd' && b.deadline.toLowerCase() !== 'n/a';\
\
         if (aHasDeadline && !bHasDeadline) return -1;\
         if (!aHasDeadline && bHasDeadline) return 1;\
\
         return 0;\
     \});\
\
     let deepFocusHours = 0;\
     let activeWorkHours = 0;\
     const DEEP_FOCUS_CAPACITY = 4;\
     const ACTIVE_WORK_CAPACITY = 4; // 4 hours for active work specifically\
\
     const tasksWithCategory = sortedTasks.map(task => \{\
         const taskHours = parseTimeEstimateToHours(task.timeEstimate);\
         let timelineCategory;\
         const priority = normalizePriority(task.priority);\
\
         // High priority tasks get preference for Deep Focus\
         if (priority === 'high' && (deepFocusHours + taskHours) <= DEEP_FOCUS_CAPACITY) \{\
             timelineCategory = 'deepFocus';\
             deepFocusHours += taskHours;\
         \}\
         // Medium priority tasks can go to Deep Focus if space, otherwise Active Work\
         else if (priority === 'medium') \{\
             if ((deepFocusHours + taskHours) <= DEEP_FOCUS_CAPACITY) \{\
                 timelineCategory = 'deepFocus';\
                 deepFocusHours += taskHours;\
             \} else if ((activeWorkHours + taskHours) <= ACTIVE_WORK_CAPACITY) \{\
                 timelineCategory = 'activeWork';\
                 activeWorkHours += taskHours;\
             \} else \{\
                 timelineCategory = 'later';\
             \}\
         \}\
         // Low priority tasks go to Active Work if space, otherwise Later\
         else if (priority === 'low') \{\
             if ((activeWorkHours + taskHours) <= ACTIVE_WORK_CAPACITY) \{\
                 timelineCategory = 'activeWork';\
                 activeWorkHours += taskHours;\
             \} else \{\
                 timelineCategory = 'later';\
             \}\
         \}\
         // Fallback for any remaining high priority tasks\
         else \{\
             if ((activeWorkHours + taskHours) <= ACTIVE_WORK_CAPACITY) \{\
                 timelineCategory = 'activeWork';\
                 activeWorkHours += taskHours;\
             \} else \{\
                 timelineCategory = 'later';\
             \}\
         \}\
\
         return \{ ...task, timelineCategory, completed: false, id: task.id || `task-$\{Date.now()\}` \};\
     \});\
\
     setTasks(prevTasks => [...prevTasks, ...tasksWithCategory]);\
  \};\
\
  const handleUpdateTask = (updatedTask) => \{\
    setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));\
    setSelectedTask(updatedTask); // Keep modal open with updated data\
  \};\
\
  // --- AI-POWERED FEATURES (UPDATED for Feature 4, 5, 6) ---\
  const handlePrioritize = async (textToProcess, profile, retryCount = 0) => \{\
    if (!textToProcess.trim()) return;\
    setIsProcessing(true);\
    const currentProfile = profile || userProfile;\
\
    const prompt = `\
    You are an expert assistant for a founding designer. Analyze a raw text dump of tasks and transform it into a structured, prioritized action plan.\
\
    CRITICAL DEADLINE PARSING RULES:\
    - Tasks with "ASAP", "urgent", "critical", "emergency", "immediately" = HIGH priority\
    - Tasks with "today", "tomorrow", "EOD", "end of day" = HIGH priority  \
    - Tasks with "this week", specific days = MEDIUM priority minimum\
    - Look for deadline patterns: "due Friday", "by tomorrow", "need by EOD"\
\
    USER CONTEXT:\
    - Designer's Challenge: "$\{currentProfile?.role || 'general design work'\}"\
    - Preferred Work Style: "$\{currentProfile?.workStyle || 'not specified'\}"\
\
    ANALYSIS & PRIORITIZATION:\
    1. **Parse & Extract**: For each task, extract: 'deadline', 'stakeholders', 'energy' (Creative/Administrative), 'dependencies', a realistic 'timeEstimate' as a string (e.g., "2.5h"), 'businessImpact' (a 4-5 word summary describing the *outcome or value* of the task, not just repeating the task title), 'urgencyLevel' ('critical', 'urgent', 'high', 'normal'), and a 'shortText'. The 'shortText' should be a condensed summary of the task title, preserving key information, ideally under 10 words. Also generate a short list of 'subtasks'.\
\
    2. **Prioritize Intelligently**: \
       - FIRST: Check for deadline urgency (ASAP, today, tomorrow = HIGH)\
       - SECOND: Dependencies and blockers = HIGH  \
       - THIRD: Business impact on revenue/users = HIGH/MEDIUM\
       - FOURTH: Energy optimization\
\
    3. **Provide Reasoning**: For each task, provide a brief "reasoning" for its priority.\
\
    4. **Summarize**: After analyzing all tasks, provide a 'totalTimeEstimate' as a string (e.g., "40 hours" or "90 mins"), a 'workloadWarning' (true if total > 6 hours), a very concise 'optimizationTip' (one short sentence), and a boolean 'userWorkStyleProvided' (true if they specified a work style).\
\
    5. **Categorize**: Assign a category: "Brand", "UX", "Research", "Admin", or "Stakeholder".\
\
    IMPORTANT: For each task's "priority" field, respond with ONLY these exact strings: "high", "medium", or "low" (lowercase). Never use numbers, rankings, or other formats.\
\
    RESPONSE FORMAT:\
    Respond ONLY with a single JSON object. It must have top-level keys: "tasksByTheme", "totalTimeEstimate", "workloadWarning", "optimizationTip", and "userWorkStyleProvided". "tasksByTheme" should be an object where keys are project themes and values are arrays of task objects. Each task object must have: "text", "shortText", "priority", "reasoning", "category", "deadline", "stakeholders", "energy", "dependencies", "timeEstimate", "subtasks", "businessImpact", and "urgencyLevel".\
    `;\
\
    try \{\
        let chatHistory = [\{ role: "user", parts: [\{ text: `$\{prompt\}\\n\\nTASK DUMP:\\n"$\{textToProcess\}"` \}] \}];\
        const payload = \{ contents: chatHistory \};\
        const apiKey = "";\
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=$\{apiKey\}`;\
        const response = await fetch(apiUrl, \{ method: 'POST', headers: \{ 'Content-Type': 'application/json' \}, body: JSON.stringify(payload) \});\
        if (!response.ok) throw new Error(`API request failed with status $\{response.status\}`);\
        const result = await response.json();\
\
        if (result.candidates?.[0]?.content?.parts?.[0]) \{\
            const textResponse = result.candidates[0].content.parts[0].text;\
            const jsonStringMatch = textResponse.match(/```json\\n([\\s\\S]*?)\\n```/);\
            const jsonString = jsonStringMatch ? jsonStringMatch[1] : textResponse;\
            let analysis = JSON.parse(jsonString);\
            \
            Object.keys(analysis.tasksByTheme).forEach(group => \{\
                analysis.tasksByTheme[group] = analysis.tasksByTheme[group].map((task, index) => (\{\
                    ...task, \
                    id: `task-$\{group\}-$\{index\}-$\{Date.now()\}`\
                \}));\
                \
                // Apply intelligent prioritization and capitalization\
                analysis.tasksByTheme[group] = enforceIntelligentPrioritization(analysis.tasksByTheme[group]);\
            \});\
\
            // assignPriorities(analysis); // Let AI handle priorities based on urgency/deadlines\
            setAnalysisResult(analysis);\
            setIsReviewModalOpen(true);\
            setInputText('');\
        \} else \{ console.error("No valid content in API response:", result); \}\
    \} catch (error) \{\
        console.error("Error calling Gemini API:", error);\
        if (retryCount < 2) \{\
            return handlePrioritize(textToProcess, profile, retryCount + 1);\
        \}\
        \
        // Fallback: basic client-side parsing\
        const fallbackTasks = parseTasksClientSide(textToProcess);\
        setAnalysisResult(fallbackTasks);\
        setIsReviewModalOpen(true);\
    \}\
    finally \{ setIsProcessing(false); \}\
  \};\
\
  const toggleComplete = (taskId) => \{\
    let nextUncompletedTask = null;\
    const updatedTasks = tasks.map(task => \{\
        if (task.id === taskId) \{\
            return \{ ...task, completed: !task.completed \};\
        \}\
        return task;\
    \});\
\
    const currentTask = tasks.find(t => t.id === taskId);\
    if (currentTask && !currentTask.completed) \{\
        const uncompletedTasks = updatedTasks.filter(t => !t.completed);\
        if (uncompletedTasks.length > 0) \{\
            const sortedUncompleted = uncompletedTasks.sort((a, b) => \{\
                const priorityOrder = \{ high: 1, medium: 2, low: 3 \};\
                return priorityOrder[a.priority] - priorityOrder[b.priority];\
            \});\
            nextUncompletedTask = sortedUncompleted[0];\
        \}\
    \}\
\
    setTasks(updatedTasks);\
    setNextTask(nextUncompletedTask);\
  \};\
\
  const handleConfirmReview = (confirmedTasks) => \{\
    // Ensure tasks have proper IDs and structure\
    const tasksWithIds = confirmedTasks.map((task, index) => (\{\
        ...task,\
        id: task.id || `task-$\{Date.now()\}-$\{index\}`,\
        completed: false,\
        timelineCategory: task.timelineCategory || 'later' // fallback\
    \}));\
\
    setTasks(prevTasks => [...prevTasks, ...tasksWithIds]);\
    setIsReviewModalOpen(false);\
    setAnalysisResult(null);\
  \};\
\
  const renderIcon = (categoryName) => \{\
    const name = (categoryName || '').toLowerCase();\
    if (name.includes('brand')) return <BrandIcon />;\
    if (name.includes('ux')) return <UXIcon />;\
    if (name.includes('research')) return <ResearchIcon />;\
    if (name.includes('admin')) return <AdminIcon />;\
    return <Briefcase size=\{18\} />;\
  \};\
\
  const handleFileUpload = async (e) => \{ const file = e.target.files[0]; if (file && file.type === "text/plain") \{ const text = await file.text(); handlePrioritize(text, userProfile); \} else if (file) \{ alert("Please upload a .txt file."); \} e.target.value = null; \};\
\
    const timelineTasks = useMemo(() => \{\
        return \{\
            'Deep Focus': tasks.filter(t => t.timelineCategory === 'deepFocus'),\
            'Active Work': tasks.filter(t => t.timelineCategory === 'activeWork'),\
            'Later': tasks.filter(t => t.timelineCategory === 'later'),\
        \};\
    \}, [tasks]);\
\
  // --- RENDER ---\
  return (\
    <>\
      <style>\{`\
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\
        body, .font-sans \{\
          font-family: 'Inter', sans-serif;\
        \}\
        .timeline-container::-webkit-scrollbar \{ height: 8px; \}\
        .timeline-container::-webkit-scrollbar-track \{ background: #f1f1f1; border-radius: 10px; \}\
        .timeline-container::-webkit-scrollbar-thumb \{ background: #ccc; border-radius: 10px; \}\
        .timeline-container::-webkit-scrollbar-thumb:hover \{ background: #aaa; \}\
\
        details > summary \{ list-style: none; \}\
        details > summary::-webkit-details-marker \{ display: none; \}\
      `\}</style>\
      <div className="font-sans min-h-screen" style=\{\{ backgroundColor: colors.background \}\}>\
        \{showOnboarding && <ProgressiveOnboarding onComplete=\{handleOnboardingComplete\} colors=\{colors\} />\}\
\
        \{!showOnboarding && (\
            <>\
                <header className="bg-white/90 backdrop-blur-lg border-b border-gray-200/60">\
                    <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">\
                        <div className="flex items-center gap-4">\
                            <AnimatedLogo colors=\{colors\} size=\{40\} />\
                            <div>\
                                <h1 className="text-xl font-light" style=\{\{color: colors.primary\}\}>Anchor</h1>\
                                <p className="text-xs text-gray-500">Your Design Workflow Companion</p>\
                            </div>\
                        </div>\
                        <div className="flex items-center gap-2">\
                             <button onClick=\{() => setViewMode('timeline')\} className=\{`px-4 py-1.5 text-sm font-semibold rounded-lg $\{viewMode === 'timeline' ? 'bg-gray-200 text-gray-800' : 'text-gray-500'\}`\}>Timeline</button>\
                             <button onClick=\{() => setViewMode('list')\} className=\{`px-4 py-1.5 text-sm font-semibold rounded-lg $\{viewMode === 'list' ? 'bg-gray-200 text-gray-800' : 'text-gray-500'\}`\}>List</button>\
                             \{viewMode === 'timeline' && (\
                                 <>\
                                     <span className="w-px h-4 bg-gray-200"></span>\
                                     <button\
                                         onClick=\{() => setShowCompletedTasks(!showCompletedTasks)\}\
                                         className=\{`px-3 py-1.5 text-sm font-semibold rounded-lg flex items-center gap-2 $\{!showCompletedTasks ? 'text-gray-500' : ''\}`\}\
                                         style=\{showCompletedTasks ? \{backgroundColor: '#C3DAFE', color: '#1A365D'\} : \{\}\}\
                                         title="Toggle Completed Tasks"\
                                     >\
                                         <Check size=\{16\} /> \{showCompletedTasks ? 'Show' : 'Hide'\} Completed\
                                     </button>\
                                 </>\
                             )\}\
                        </div>\
                    </div>\
                </header>\
\
                <main className="max-w-6xl mx-auto px-6 py-6">\
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200/80 flex items-start gap-4">\
                        <div className="relative flex-grow">\
                            <textarea\
                                value=\{inputText\}\
                                onChange=\{(e) => setInputText(e.target.value)\}\
                                placeholder="Add your design tasks..."\
                                className="w-full p-4 pr-20 text-base rounded-xl border-2 focus:outline-none resize-none transition-all duration-200 font-light min-h-[120px] bg-gray-50 border-gray-200 text-gray-800"\
                                rows="4"\
                            />\
                            <div className="absolute top-3 right-3 flex items-center gap-2">\
                                <button className="p-2 rounded-full hover:bg-gray-200 text-gray-500"><Settings size=\{16\}/></button>\
                                <button onClick=\{() => fileInputRef.current.click()\} className="p-2 rounded-full hover:bg-gray-200 text-gray-500"><Upload size=\{16\}/></button>\
                                <input type="file" ref=\{fileInputRef\} onChange=\{handleFileUpload\} className="hidden" accept=".txt"/>\
                            </div>\
                        </div>\
                        <button\
                            onClick=\{() => handlePrioritize(inputText, userProfile)\}\
                            disabled=\{!inputText.trim() || isProcessing\}\
                            className="px-6 py-4 h-full text-white rounded-xl font-semibold flex flex-col items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"\
                            style=\{\{ background: `linear-gradient(135deg, $\{colors.primary\}, $\{colors.secondary\})` \}\}\
                        >\
                            \{isProcessing ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <Sparkles size=\{20\} />\}\
                            <span>\{isProcessing ? 'Analyzing...' : 'Prioritize'\}</span>\
                        </button>\
                    </div>\
\
                    \{isReviewModalOpen && <SmartReviewModal analysisResult=\{analysisResult\} onConfirm=\{handleConfirmReview\} onCancel=\{() => setIsReviewModalOpen(false)\} colors=\{colors\} priorityStyles=\{priorityStyles\} setUserProfile=\{setUserProfile\} />\}\
\
                    <div className="mt-8">\
                        \{viewMode === 'list' ? (\
                            <>\
                                <div className="flex items-center gap-2 mb-6">\
                                    <span className="text-sm font-semibold text-gray-600">Group by:</span>\
                                    <button onClick=\{() => setListGroupMode('priority')\} className=\{`px-3 py-1 text-sm font-semibold rounded-full $\{listGroupMode === 'priority' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'\}`\}>Priority</button>\
                                    <button onClick=\{() => setListGroupMode('category')\} className=\{`px-3 py-1 text-sm font-semibold rounded-full $\{listGroupMode === 'category' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'\}`\}>Category</button>\
                                </div>\
                                <ListView tasks=\{tasks\} priorityStyles=\{priorityStyles\} toggleComplete=\{toggleComplete\} groupBy=\{listGroupMode\} setSelectedTask=\{setSelectedTask\} renderIcon=\{renderIcon\} />\
                            </>\
                        ) : (\
                            <div className="bg-white rounded-3xl shadow-md shadow-gray-200/50 border border-gray-200/60 flex flex-col h-[calc(100vh-280px)]">\
                                \{(() => \{\
                                    const sections = ['Deep Focus', 'Active Work', 'Later'];\
                                    const activeIndex = sections.indexOf(activeSection);\
                                    const currentTasks = timelineTasks[activeSection] || [];\
                                    const completedCount = currentTasks.filter(t => t.completed).length;\
                                    const totalCount = currentTasks.length;\
                                    const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;\
\
                                    const handleNext = () => \{\
                                        if (activeIndex < sections.length - 1) \{\
                                            setActiveSection(sections[activeIndex + 1]);\
                                        \}\
                                    \};\
                                    const handlePrev = () => \{\
                                        if (activeIndex > 0) \{\
                                            setActiveSection(sections[activeIndex - 1]);\
                                        \}\
                                    \};\
\
                                    return (\
                                        <>\
                                            <div className="p-6 border-b flex items-center justify-between">\
                                                <h2 className="text-2xl font-light" style=\{\{ color: colors.primary \}\}>Today's Focus</h2>\
                                                <div className="flex items-center gap-5 text-sm" style=\{\{ color: colors.subtle \}\}>\
                                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style=\{\{ backgroundColor: priorityStyles.high.color \}\}></div><span>High</span></div>\
                                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style=\{\{ backgroundColor: priorityStyles.medium.color \}\}></div><span>Medium</span></div>\
                                                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style=\{\{ backgroundColor: priorityStyles.low.color \}\}></div><span>Low</span></div>\
                                                </div>\
                                            </div>\
\
                                            <div className="p-4 border-b flex items-center justify-center gap-8">\
                                                \{[\
                                                    \{ name: 'Deep Focus', icon: DeepFocusIcon \},\
                                                    \{ name: 'Active Work', icon: ActiveWorkIcon \},\
                                                    \{ name: 'Later', icon: LaterIcon \}\
                                                ].map((\{ name, icon: IconComponent \}) => (\
                                                    <button key=\{name\} onClick=\{() => setActiveSection(name)\} className="flex flex-col items-center gap-2 text-sm font-semibold transition-colors group">\
                                                        <IconComponent\
                                                            fill=\{activeSection === name ? '#1A365D' : 'none'\}\
                                                            stroke=\{activeSection === name ? '#1A365D' : 'currentColor'\}\
                                                            className=\{activeSection === name ? '' : 'text-gray-300 group-hover:text-gray-400'\}\
                                                            style=\{activeSection === name ? \{color: '#1A365D'\} : \{\}\}\
                                                        />\
                                                        <span className=\{activeSection === name ? '' : 'text-gray-500 group-hover:text-gray-600'\} style=\{activeSection === name ? \{color: '#1A365D'\} : \{\}\}>\{name\}</span>\
                                                    </button>\
                                                ))\}\
                                            </div>\
\
                                            <div className="flex-grow overflow-y-auto p-6" style=\{\{ background: 'url("data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'2\\' cy=\\'2\\' r=\\'1\\' fill=\\'%23000\\' fill-opacity=\\'0.1\\'/%3E%3C/svg%3E")'\}\}>\
                                                <div className="space-y-10">\
                                                        \{Object.entries(timelineTasks).map(([title, sectionTasks]) => (\
                                                            title === activeSection && sectionTasks.length > 0 && (\
                                                            <div key=\{title\}>\
                                                                <h3 className="text-lg font-medium mb-4" style=\{\{ color: '#1A365D' \}\}>\{title\} (\{sectionTasks.filter(t=>!t.completed).length\} remaining)</h3>\
                                                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">\
                                                                    \{sectionTasks.filter(t => !t.completed || showCompletedTasks).map(task => \{\
                                                                        const priorityStyle = priorityStyles[normalizePriority(task.priority)];\
                                                                        return (\
                                                                            <div key=\{task.id\} className="w-full max-w-[280px] cursor-pointer group" onClick=\{() => setSelectedTask(task)\}>\
                                                                                <div className=\{`relative hover:shadow-xl transition-all duration-200 border-2 rounded-lg py-3 px-5 flex flex-col $\{task.completed ? 'opacity-50' : ''\}`\} style=\{\{ borderColor: priorityStyle.color, minHeight: '120px', backgroundColor: priorityStyle.bg \}\}>\
                                                                                    <button onClick=\{(e) => \{ e.stopPropagation(); toggleComplete(task.id); \}\} className="absolute -top-2 -left-2 w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center transition-all focus:outline-none hover:scale-110" style=\{\{ backgroundColor: 'white', borderColor: priorityStyle.color \}\}>\
                                                                                        <div className=\{`w-3 h-3 rounded-full transition-all duration-200 $\{task.completed ? 'bg-green-500' : 'hover:bg-green-500/50'\}`\}></div>\
                                                                                    </button>\
                                                                                    <div className="flex-grow">\
                                                                                        <div className="flex items-start justify-between mb-2">\
                                                                                            <h4 className="font-semibold text-sm leading-tight" style=\{\{ color: priorityStyle.color, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' \}\}>\
                                                                                                \{task.shortText || task.text\}\
                                                                                            </h4>\
                                                                                            <div className="w-3 h-3 rounded-full ml-2 mt-1 flex-shrink-0" style=\{\{ backgroundColor: priorityStyle.color \}\}></div>\
                                                                                        </div>\
                                                                                        <div className="text-xs text-gray-700 font-medium mt-1.5" style=\{\{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' \}\}>\
                                                                                            <span className="font-semibold" style=\{\{color: colors.text\}\}>Impact:</span> \{task.businessImpact\}\
                                                                                        </div>\
                                                                                    </div>\
                                                                                    <div className="flex justify-between items-center text-xs mt-2 flex-shrink-0">\
                                                                                        <div className="flex items-center gap-2 text-gray-500 flex-1 min-w-0">\
                                                                                            <div className="flex items-center gap-1"><Clock size=\{12\} /><span>\{formatTimeEstimate(task.timeEstimate)\}</span></div>\
                                                                                            <span className="text-gray-300">|</span>\
                                                                                            <span className=\{`font-semibold truncate $\{task.deadline && task.deadline.toLowerCase() !== 'n/a' ? 'text-gray-800' : 'text-gray-500'\}`\}>\
                                                                                                \{formatDueDate(task.deadline)\}\
                                                                                            </span>\
                                                                                        </div>\
                                                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 ml-2 flex-shrink-0">\
                                                                                            Details...\
                                                                                        </div>\
                                                                                    </div>\
                                                                                </div>\
                                                                            </div>\
                                                                        );\
                                                                    \})\}\
                                                                </div>\
                                                            </div>\
                                                            )\
                                                        ))\}\
                                                </div>\
                                           </div>\
                                            <div className="p-4 border-t flex items-center justify-between">\
                                                <button onClick=\{handlePrev\} disabled=\{activeIndex === 0\} className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">\uc0\u8592  Previous</button>\
                                                <div className="text-sm font-semibold text-gray-600">\{completedCount\} of \{totalCount\} completed</div>\
                                                \{completionPercentage > 75 && activeIndex < sections.length - 1 ? (\
                                                     <button onClick=\{handleNext\} className="px-4 py-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg">Ready for \{sections[activeIndex + 1]\}?</button>\
                                                ) : (\
                                                     <button onClick=\{handleNext\} disabled=\{activeIndex === sections.length - 1\} className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">Next \uc0\u8594 </button>\
                                                )\}\
                                            </div>\
                                        </>\
                                    )\
                                \})()\}\
                            </div>\
                        )\}\
                    </div>\
                </main>\
                \{nextTask && (\
                    <div className="fixed bottom-8 right-8 bg-white shadow-lg rounded-lg p-4 w-80 animate-fade-in-up">\
                        <div className="flex justify-between items-center">\
                            <h4 className="font-semibold text-sm">Next Up!</h4>\
                            <button onClick=\{() => setNextTask(null)\} className="p-1"><X size=\{16\} /></button>\
                        </div>\
                        <p className="text-gray-700 mt-2 capitalize">\{nextTask.text\}</p>\
                    </div>\
                )\}\
                \{selectedTask && (\
                    <TaskDetailModal\
                        task=\{selectedTask\}\
                        onClose=\{() => setSelectedTask(null)\}\
                        onSave=\{handleUpdateTask\}\
                        colors=\{colors\}\
                        priorityStyles=\{priorityStyles\}\
                    />\
                )\}\
            </>\
        )\}\
      </div>\
    </>\
  );\
\};\
\
export default App;\
}