'use client';

import { useState } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';

export default function BlogShare({ title }) {
const [copied, setCopied] = useState(false);

const handleShare = async () => {
const url = window.location.href;


try {
  if (navigator.share) {
    await navigator.share({
      title,
      text: title,
      url,
    });

    return;
  }

  await navigator.clipboard.writeText(url);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
} catch (error) {
  // User cancelled native share dialog.
  // No action required.
}


};

return ( <button
   type="button"
   onClick={handleShare}
   className="blog-share-button"
 >
{copied ? <Check size={16} /> : <Share2 size={16} />}


  {copied ? 'Link Copied' : 'Share'}
</button>

);
}
