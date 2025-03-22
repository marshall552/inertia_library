import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface TableColumn {
    key: string;
    header: string;
    width?: string;
}

export interface TableAction {
    icon: LucideIcon;
    label: string;
    onClick: (item: any) => void;
    color: string;
    hoverColor: string;
}

interface DataTableProps {
    columns: TableColumn[];
    data: any[];
    actions?: TableAction[];
    className?: string;
}

const DataTable: React.FC<DataTableProps> = ({
    columns,
    data,
    actions,
    className = ''
}) => {
    return (
        <div className={`bg-white rounded-lg shadow-sm ${className}`}>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#2C2F33] text-white">
                            {columns.map((column, index) => (
                                <th
                                    key={column.key}
                                    className={`px-4 py-3 text-left ${index === 0 ? 'rounded-tl-lg' : ''} ${
                                        index === columns.length - 1 && !actions ? 'rounded-tr-lg' : ''
                                    } ${column.width ? `w-${column.width}` : ''}`}
                                >
                                    {column.header}
                                </th>
                            ))}
                            {actions && actions.length > 0 && (
                                <th className="px-4 py-3 text-center rounded-tr-lg">
                                    Actions
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-gray-100 text-gray-700">
                                {columns.map((column) => (
                                    <td key={column.key} className="px-4 py-3">
                                        {item[column.key]}
                                    </td>
                                ))}
                                {actions && actions.length > 0 && (
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center gap-2">
                                            {actions.map((action, actionIndex) => (
                                                <button
                                                    key={actionIndex}
                                                    className={`p-1 rounded-lg hover:${action.hoverColor}`}
                                                    onClick={() => action.onClick(item)}
                                                    title={action.label}
                                                >
                                                    <action.icon className={`w-5 h-5 ${action.color}`} />
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
