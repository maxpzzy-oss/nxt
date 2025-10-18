import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ChannelListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const channelData = {
  base: [
    { num: 2, name: 'NBC HD (WESH)' },
    { num: 3, name: 'FOX HD (WOLF)' },
    { num: 4, name: 'PBS HD (WUCF)' },
    { num: 5, name: 'PBS HD (WDSC-ED)' },
    { num: 6, name: 'CBS HD (WKMG)' },
    { num: 7, name: 'My Network TV HD (WRBW)' },
    { num: 8, name: 'ION HD (WOPX)' },
    { num: 9, name: 'Home Shopping Network' },
    { num: 11, name: 'WTGL (ETV) HD' },
    { num: 12, name: 'EWTN' },
    { num: 14, name: 'Grit (WOTF)' },
    { num: 15, name: 'Telemundo HD (WTMO)' },
    { num: 16, name: 'TBN HD (WHLV)' },
    { num: 17, name: 'Bounce (WOPX-2)' },
    { num: 18, name: 'CW 18 HD (WKCF)' },
    { num: 23, name: 'QVC HD' },
    { num: 25, name: 'QVC2 HD' },
    { num: 46, name: 'ShopHQ' },
    { num: 75, name: 'Merit Street Media (WHLV-2)' },
    { num: 76, name: 'Daystar HD' },
    { num: 77, name: 'Smile (WHLV-4)' },
    { num: 78, name: 'INSP HD' },
    { num: 79, name: 'GOD TV HD' },
    { num: 80, name: 'Cozi TV (WKMG-3)' },
    { num: 81, name: 'The Florida Channel (WEFS-4)' },
    { num: 82, name: 'DW (WDSC-3)' },
    { num: 83, name: 'True Crime (WKCF-2)' },
    { num: 84, name: 'NHK World (WUCF-4)' },
    { num: 85, name: 'Arts (WEFS-2)' },
    { num: 86, name: 'Start TV (WKMG-4)' },
    { num: 89, name: 'DABL (WKMG-2)' },
    { num: 90, name: 'BYUtv HD' },
    { num: 91, name: 'C-SPAN' },
    { num: 92, name: 'C-SPAN2' },
    { num: 94, name: 'Summit Broadband Info Channel' },
    { num: 95, name: 'Catchy Comedy (WKMG-5)' },
    { num: 96, name: 'TBN Inspire (WHLV-3)' },
    { num: 98, name: 'Buzzr (WOFL-2)' },
    { num: 99, name: 'Fox Weather (WOFL-3)' },
    { num: 125, name: 'MeTV (WESH-2)' },
    { num: 126, name: 'Story (WESH-3)' },
    { num: 141, name: 'Estrella TV (WKCF-3)' },
  ],
  ascend: [
    { num: 26, name: 'USA Network HD' },
    { num: 27, name: 'The Weather Channel HD' },
    { num: 28, name: 'CNN HD' },
    { num: 29, name: 'Headline News HD' },
    { num: 30, name: 'MSNBC HD' },
    { num: 31, name: 'CNBC HD' },
    { num: 32, name: 'Fox News HD' },
    { num: 33, name: 'truTV HD' },
    { num: 34, name: 'ESPN HD' },
    { num: 35, name: 'ESPN2 HD' },
    { num: 36, name: 'Golf Channel HD' },
    { num: 37, name: 'ACC HD' },
    { num: 38, name: 'Bally Sports Sun' },
    { num: 39, name: 'Bally Sports Florida' },
    { num: 40, name: 'Fox Sports 1 HD' },
    { num: 41, name: 'FX HD' },
    { num: 42, name: 'TNT HD' },
    { num: 43, name: 'TBS HD' },
    { num: 45, name: 'FXX HD' },
    { num: 47, name: 'AMC HD' },
    { num: 51, name: 'Disney Channel HD' },
    { num: 52, name: 'Cartoon Network HD' },
    { num: 53, name: 'Freeform HD' },
    { num: 54, name: 'Animal Planet HD' },
    { num: 55, name: 'Discovery HD' },
    { num: 56, name: 'TLC HD' },
    { num: 57, name: 'Travel Channel HD' },
    { num: 58, name: 'E! HD' },
    { num: 59, name: 'Oxygen' },
    { num: 60, name: 'Food Network HD' },
    { num: 61, name: 'HGTV HD' },
    { num: 62, name: 'Lifetime HD' },
    { num: 64, name: 'A&E HD' },
    { num: 65, name: 'History HD' },
    { num: 66, name: 'Bravo HD' },
    { num: 69, name: 'Syfy HD' },
    { num: 104, name: 'Newsmax TV HD' },
    { num: 105, name: 'OAN HD' },
    { num: 106, name: 'Fox Business HD' },
    { num: 109, name: 'National Geographic HD' },
    { num: 111, name: 'Investigation Discovery HD' },
    { num: 114, name: 'BBC America HD' },
    { num: 122, name: 'Cooking Channel HD' },
    { num: 124, name: 'HSN2 HD' },
    { num: 134, name: 'Crime & Investigation HD' },
    { num: 135, name: 'Military History Channel' },
    { num: 137, name: 'Hallmark Channel HD' },
    { num: 138, name: 'Hallmark Family HD' },
    { num: 139, name: 'Hallmark Mystery HD' },
    { num: 140, name: 'TCM (Turner Classic Movies) HD' },
    { num: 164, name: 'Independent Film Channel HD' },
    { num: 197, name: 'SEC Network HD' },
    { num: 199, name: 'Tennis Channel HD' },
    { num: 209, name: 'Bloomberg TV HD' },
    { num: 213, name: 'WeTV HD' },
    { num: 214, name: 'Lifetime Movies HD' },
    { num: 216, name: 'Game Show Network' },
    { num: 217, name: 'FX Movies HD' },
    { num: 222, name: 'Disney XD HD' },
    { num: 235, name: 'Fuse' },
    { num: 258, name: 'Motor Trend HD' },
    { num: 300, name: 'BTN HD' },
    { num: 314, name: 'BTN Overflow HD' },
  ],
  peak: [
    { num: 93, name: 'C-SPAN3' },
    { num: 103, name: 'OWN HD' },
    { num: 108, name: 'CNBC World HD' },
    { num: 110, name: 'CNN International HD' },
    { num: 117, name: 'Viceland HD' },
    { num: 119, name: 'AWE - A Wealth of Entertainment' },
    { num: 120, name: 'Lifetime Real Women (LRW)' },
    { num: 121, name: 'Magnolia (DIY) HD' },
    { num: 123, name: 'FIDO TV HD' },
    { num: 147, name: 'GAC Family HD' },
    { num: 200, name: 'CBS Sports HD' },
    { num: 201, name: 'ESPNU HD' },
    { num: 204, name: 'Fox Sports 2 HD' },
    { num: 205, name: 'MLB Network HD' },
    { num: 207, name: 'NFL Network HD' },
    { num: 208, name: 'NHL Network HD' },
    { num: 211, name: 'Nat Geo WILD HD' },
    { num: 212, name: 'Science Channel HD' },
    { num: 215, name: 'Discovery Life HD' },
    { num: 223, name: 'Disney Junior HD' },
    { num: 250, name: 'FYI HD' },
    { num: 251, name: 'Destination America HD' },
    { num: 252, name: 'American Heroes Channel HD' },
    { num: 253, name: 'Boomerang HD' },
    { num: 254, name: 'Discovery Family HD' },
    { num: 256, name: 'Smithsonian Channel HD' },
  ],
};

export const ChannelListModal: React.FC<ChannelListModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-gradient-to-r from-primary-600 to-secondary-600">
          <h2 className="text-2xl font-bold text-white">Cableinternet IPTV Channel Lineup</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          <div className="space-y-8">
            <div>
              <div className="bg-red-500 text-white px-4 py-3 rounded-lg mb-4">
                <h3 className="text-xl font-bold">Base Package</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {channelData.base.map((channel) => (
                  <div key={channel.num} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                    <span className="text-primary-600 font-bold text-lg w-12">{channel.num}</span>
                    <span className="text-neutral-700 text-sm">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-red-500 text-white px-4 py-3 rounded-lg mb-4">
                <h3 className="text-xl font-bold">Ascend Package</h3>
                <p className="text-sm text-white/90">Includes Base Channels</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {channelData.ascend.map((channel) => (
                  <div key={channel.num} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                    <span className="text-primary-600 font-bold text-lg w-12">{channel.num}</span>
                    <span className="text-neutral-700 text-sm">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-red-500 text-white px-4 py-3 rounded-lg mb-4">
                <h3 className="text-xl font-bold">Peak Package</h3>
                <p className="text-sm text-white/90">Includes Base and Ascend Channels</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {channelData.peak.map((channel) => (
                  <div key={channel.num} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                    <span className="text-primary-600 font-bold text-lg w-12">{channel.num}</span>
                    <span className="text-neutral-700 text-sm">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border-2 border-primary-200">
              <p className="text-base font-semibold text-primary-900 mb-2">
                And Many More Channels!
              </p>
              <p className="text-sm text-primary-800">
                This is just a preview of our most popular channels. Our complete lineup includes hundreds of additional channels across sports, entertainment, news, movies, international programming, and more. Subscribe today to unlock the full experience!
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Note:</span> HD indicates channels are broadcasted in high-definition.
                Channels and channel lineups are subject to change.
              </p>
              <p className="text-sm text-blue-900 mt-2">
                <span className="font-semibold">Contact:</span> cableinternet@atomicmail.io
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-neutral-200 bg-neutral-50">
          <Button variant="primary" className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
