
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { UserAgent } from '@/utils/userAgentData';

interface UserAgentCardProps {
  userAgent: UserAgent;
  index: number;
}

const UserAgentCard = ({ userAgent, index }: UserAgentCardProps) => {
  const categoryColors = {
    desktop: 'bg-blue-50 text-blue-700',
    mobile: 'bg-emerald-50 text-emerald-700',
    tablet: 'bg-purple-50 text-purple-700',
    bot: 'bg-orange-50 text-orange-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }}
    >
      <Link
        to={`/user-agent/${userAgent.id}`}
        className={cn(
          "block w-full rounded-xl p-5",
          "bg-white backdrop-blur-sm border border-gray-100",
          "transition-all duration-300",
          "hover:shadow-lg hover:border-blue-100",
          "glass-card"
        )}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex gap-2 items-center">
            <span className={cn(
              "text-xs font-medium px-2.5 py-0.5 rounded-full",
              categoryColors[userAgent.category]
            )}>
              {userAgent.category.charAt(0).toUpperCase() + userAgent.category.slice(1)}
            </span>
            <span className="text-xs text-gray-500">
              Last updated: {userAgent.lastUpdated}
            </span>
          </div>
          <span className="text-xs font-medium text-blue-600">
            {userAgent.popularity.toFixed(1)}% popularity
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-1 text-gray-900">
          {userAgent.name}
        </h3>
        
        <div className="bg-gray-50 rounded-lg p-3 mt-3 overflow-hidden">
          <code className="text-xs text-gray-700 block whitespace-normal break-all">
            {userAgent.value}
          </code>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="text-xs py-1 px-2 rounded bg-gray-100 text-gray-700">
              {userAgent.browser}
            </span>
            <span className="text-xs py-1 px-2 rounded bg-gray-100 text-gray-700">
              {userAgent.os}
            </span>
            <span className="text-xs py-1 px-2 rounded bg-gray-100 text-gray-700">
              {userAgent.device}
            </span>
          </div>
          
          <span className="text-sm text-blue-600">View details →</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default UserAgentCard;
