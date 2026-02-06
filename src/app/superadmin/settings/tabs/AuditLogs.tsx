import Input from "@/components/ui/Input";

interface AuditLogsProps {
  logs: any[];
}

export default function AuditLogs({ logs }: AuditLogsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Audit Logs</h2>
        <p className="text-sm text-gray-600 mt-1">
          Track all critical platform actions
        </p>
      </div>

      <div className="p-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input type="date" className="sm:w-auto" />
          <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option>All Actions</option>
            <option>Admin Created</option>
            <option>Restaurant Approved</option>
            <option>Subscription Changed</option>
            <option>Login Failed</option>
          </select>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3">Actor</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Timestamp</th>
                <th className="px-4 py-3">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {log.actor}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{log.action}</td>
                  <td className="px-4 py-3 text-gray-600">{log.entity}</td>
                  <td className="px-4 py-3 text-gray-600">{log.timestamp}</td>
                  <td className="px-4 py-3 text-gray-600">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{log.action}</h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {log.actor}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{log.entity}</p>
              <div className="flex justify-between text-xs text-gray-500 pt-2 border-t">
                <span>{log.timestamp}</span>
                <span>{log.ip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
