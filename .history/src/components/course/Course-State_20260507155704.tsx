import { CircleX } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const EmptyState = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
            <div className="max-w-md w-full bg-card border rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-5">
                <CircleX className="size-8 text-destructive" />
              </div>
    
              <h1 className="text-2xl font-bold mb-3">Không tìm thấy khoá học</h1>
    
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Khoá học bạn đang tìm có thể đã bị xoá hoặc đường dẫn không tồn tại.
              </p>
    
              <Button asChild variant="custom">
                <Link href="/">Quay về trang chủ</Link>
              </Button>
            </div>
          </div>
  )
}

export default EmptyState