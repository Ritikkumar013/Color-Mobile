import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Types
interface Bet {
  _id: string;
  userId: string;
  period: string;
  gameDuration: number;
  betAmount: number;
  betType: 'size' | 'number' | 'color';
  betValue: string[];
  status: 'lost' | 'pending' | 'won';
  winnings: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BetHistoryData {
  status: string;
  statusCode: number;
  message: string;
  data: {
    page: number;
    limit: number;
    totalPages: number;
    totalBets: number;
    bets: Bet[];
  };
}

const BetHistoryScreen: React.FC = () => {
  const router = useRouter();
  const [betHistory, setBetHistory] = useState<BetHistoryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sample data - replace with actual API call
  const sampleData: BetHistoryData = {
    status: "success",
    statusCode: 200,
    message: "Bets fetched.",
    data: {
      page: 1,
      limit: 20,
      totalPages: 3,
      totalBets: 44,
      bets: [
        {
          _id: "68ada2ab1369c0b6312833a0",
          userId: "67779b3e8e5e143dc8bd7361",
          period: "3m-20250826-1733-1",
          gameDuration: 180,
          betAmount: 9.8,
          betType: "size",
          betValue: ["small"],
          status: "lost",
          winnings: 0,
          createdAt: "2025-08-26T12:03:55.096Z",
          updatedAt: "2025-08-26T12:05:56.154Z",
          __v: 0
        },
        {
          _id: "68ada1ca1369c0b6312832f9",
          userId: "67779b3e8e5e143dc8bd7361",
          period: "3m-20250826-1730-2",
          gameDuration: 180,
          betAmount: 98,
          betType: "size",
          betValue: ["small"],
          status: "lost",
          winnings: 0,
          createdAt: "2025-08-26T12:00:10.708Z",
          updatedAt: "2025-08-26T12:02:56.097Z",
          __v: 0
        },
        {
          _id: "68ada0781369c0b631283264",
          userId: "67779b3e8e5e143dc8bd7361",
          period: "3m-20250826-1724-1",
          gameDuration: 180,
          betAmount: 980,
          betType: "number",
          betValue: ["7"],
          status: "lost",
          winnings: 0,
          createdAt: "2025-08-26T11:54:32.701Z",
          updatedAt: "2025-08-26T11:56:56.104Z",
          __v: 0
        },
        {
          _id: "68ac4c1400230da36e1078d7",
          userId: "67779b3e8e5e143dc8bd7361",
          period: "3m-20250825-1712-1",
          gameDuration: 180,
          betAmount: 490,
          betType: "number",
          betValue: ["2"],
          status: "pending",
          winnings: 0,
          createdAt: "2025-08-25T11:42:12.244Z",
          updatedAt: "2025-08-25T11:44:55.144Z",
          __v: 0
        },
        {
          _id: "sample_won_bet",
          userId: "67779b3e8e5e143dc8bd7361",
          period: "3m-20250826-1800-1",
          gameDuration: 180,
          betAmount: 50,
          betType: "color",
          betValue: ["Green"],
          status: "won",
          winnings: 100,
          createdAt: "2025-08-26T13:00:00.000Z",
          updatedAt: "2025-08-26T13:00:00.000Z",
          __v: 0
        }
      ]
    }
  };

  // Format date function
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Get bet title
  const getBetTitle = (betType: string, betValue: string[]): string => {
    if (betType === 'size') {
      return `Bet: ${betValue[0]}`;
    } else if (betType === 'number') {
      return `Bet: ${betValue[0]}`;
    } else if (betType === 'color') {
      return `Bet: ${betValue[0]}`;
    }
    return 'Bet';
  };

  // Get status color classes
  const getStatusColorClass = (status: string): string => {
    switch (status) {
      case 'lost':
        return 'text-red-500';
      case 'pending':
        return 'text-yellow-500';
      case 'won':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  // Format amount with proper prefix
  const formatAmount = (amount: number, status: string): string => {
    const prefix = status === 'lost' ? '- ₹ ' : status === 'won' ? '+ ₹ ' : '₹ ';
    return prefix + amount.toFixed(1);
  };

  // Fetch bet history - replace with actual API call
  const fetchBetHistory = async (page: number = 1) => {
    try {
      setLoading(true);
      // Replace this with actual API call
      // const response = await fetch(`http://192.154.230.43:3000/api/users/history?page=${page}`);
      // const data = await response.json();
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBetHistory(sampleData);
    } catch (error) {
      console.error('Error fetching bet history:', error);
      Alert.alert('Error', 'Failed to fetch bet history');
    } finally {
      setLoading(false);
    }
  };

  // Handle refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchBetHistory(currentPage);
    setRefreshing(false);
  };

  // Load more data (pagination)
  const loadPage = async (page: number) => {
    if (page < 1 || (betHistory && page > betHistory.data.totalPages)) return;
    setCurrentPage(page);
    await fetchBetHistory(page);
  };

  // Initial load
  useEffect(() => {
    fetchBetHistory();
  }, []);

  // Render bet item
  const renderBetItem = (bet: Bet) => {
    const gameNumber = bet.period.split('-').pop();
    
    return (
      <View key={bet._id} className="bg-gray-50 rounded-xl p-5 mb-4 shadow-sm">
        <View className="flex-row justify-between items-start mb-3">
          <Text className="text-lg font-semibold text-gray-800">
            {getBetTitle(bet.betType, bet.betValue)}
          </Text>
          <View className="items-end">
            <Text className={`text-base font-semibold mb-1 ${getStatusColorClass(bet.status)}`}>
              {bet.status.charAt(0).toUpperCase() + bet.status.slice(1)}
            </Text>
            <Text className={`text-base font-semibold ${getStatusColorClass(bet.status)}`}>
              {formatAmount(bet.betAmount, bet.status)}
            </Text>
          </View>
        </View>
        
        <View className="space-y-1">
          <Text className="text-sm text-gray-600">Period: {bet.period}</Text>
          <Text className="text-sm text-gray-600">Game: {gameNumber}</Text>
          <Text className="text-sm text-gray-600">{formatDate(bet.createdAt)}</Text>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}

      {/* Content */}
      <View className="flex-1">
        {loading && !betHistory ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#10b981" />
            <Text className="text-gray-500 mt-2">Loading bet history...</Text>
          </View>
        ) : (
          <ScrollView
            className="flex-1"
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#10b981']} />
            }
          >
          <View className="p-5">
            {betHistory?.data.bets && betHistory.data.bets.length > 0 ? (
              betHistory.data.bets.map(renderBetItem)
            ) : (
              <View className="flex-1 justify-center items-center py-20">
                <Text className="text-gray-400 text-lg">No bet history found</Text>
              </View>
            )}
          </View>

          {/* Pagination */}
          {betHistory && betHistory.data.totalPages > 1 && (
            <View className="px-5 pb-5">
              <View className="flex-row justify-between items-center bg-gray-50 rounded-lg p-4">
                <TouchableOpacity
                  onPress={() => loadPage(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage <= 1 ? 'bg-gray-300' : 'bg-green-500'
                  }`}
                >
                  <Text className={`font-medium ${
                    currentPage <= 1 ? 'text-gray-500' : 'text-white'
                  }`}>
                    Previous
                  </Text>
                </TouchableOpacity>

                <Text className="text-gray-600 font-medium">
                  Page {betHistory.data.page} of {betHistory.data.totalPages}
                </Text>

                <TouchableOpacity
                  onPress={() => loadPage(currentPage + 1)}
                  disabled={currentPage >= betHistory.data.totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage >= betHistory.data.totalPages ? 'bg-gray-300' : 'bg-green-500'
                  }`}
                >
                  <Text className={`font-medium ${
                    currentPage >= betHistory.data.totalPages ? 'text-gray-500' : 'text-white'
                  }`}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default BetHistoryScreen;